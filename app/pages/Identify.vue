<template>
  <Page>
    <Header page-title="Insect ID" />
    <GridLayout rows="*, 200">
      <StackLayout row="0">
        <SegmentedBar v-model="selectedCharacterGroup">
          <SegmentedBarItem
            v-for="group in characterGroups"
            :title="group.title"
            v-bind:key="group"
          />
        </SegmentedBar>
        <Label :text="characterGroupHelp"></Label>
        <Button text="Reset" @tap="onResetButtonTap" />
        <ListView for="character in characterListByGroup" ref="characterList">
          <v-template>
            <GridLayout columns="*, *" backgroundColor="pink">
              <Label
                col="0"
                :text="character.label"
                textWrap="true"
                @tap="showModalForm(character)"
                :backgroundColor="isReleventCharacter(character) ? 'red' : 'yellow'"
              />
              <Label
                col="1"
                :text="getCharacterSelectedStateValue(character)"
                @tap="showModalForm(character)"
              />
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>

      <StackLayout row="1">
        <Label>Current possibilities {{ currentPosibilitiesCount }}</Label>
        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal" class="list-group" height="200">
            <GridLayout
              @tap="onSpeciesTap({species})"
              v-for="species in speciesList"
              v-bind:key="species.id"
              :columns="speciesList.length"
              width="100"
              height="150"
              backgroundColor="lightgray"
              rows="*, 50"
            >
              <Image height="100" width="100" :src="species.images[0] | imageAssetPath" row="0" />
              <Label :text="species.common_name" class="nameLabel" row="1"></Label>
            </GridLayout>
          </StackLayout>
        </ScrollView>
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import ModalForm from "../components/ModalForm";

export default {
  data: function() {
    return {
      characterGroups: [
        {
          key: "symptoms",
          title: "Symptoms",
          help: "What symptoms do you have?"
        },
        {
          key: "where",
          title: "Where",
          help: "Where did the bit happen?"
        },
        {
          key: "when",
          title: "When?",
          help: "What time of day / frequency?"
        },
        {
          key: "what",
          title: "What?",
          help: "What did the insect look like?"
        }
      ],
      selectedCharacterGroup: 0,
      characterStates: {}
    };
  },
  computed: {
    speciesList() {
      return this.$store.state.insects.filter(this.filterSpeciesList);
    },
    characterStateCount() {
      return this.$store.getters.getCharactersStateCount;
    },
    selectedGroupKey() {
      return this.characterGroups[this.selectedCharacterGroup].key;
    },
    characterListByGroup() {
      return this.$store.state.characters.filter(
        function(character) {
          return character.group == this.selectedGroupKey;
        }.bind(this)
      );
    },
    characterGroupHelp() {
      return this.characterGroups[this.selectedCharacterGroup].help;
    },
    currentPosibilitiesCount() {
      return this.speciesList.length;
    },
    releventCharacterIDs() {
      let relevantCharacters = [];
      let previousCharacterStates = {};
      this.speciesList.forEach(
        function(species) {
          for (const [id, states] of Object.entries(species.character_states)) {
            let characterID = Number(id);
            // Sort states and stringify to allow comparison with previous states
            let statesStr = states.sort().toString();

            // If we already know this is a relevant character, skip it
            if (relevantCharacters.indexOf(characterID) !== -1) {
              continue;
            } else if (
              typeof previousCharacterStates[characterID] !== "undefined" &&
              previousCharacterStates[characterID] != statesStr
            ) {
              relevantCharacters.push(characterID);
            }
            // Store the number of character states selected, so it can
            // be compared to the next species in the list
            previousCharacterStates[characterID] = statesStr;
          }
        }.bind(this)
      );
      return relevantCharacters;
    }
  },
  methods: {
    onSpeciesTap(item) {
      this.$goto("factSheet", {
        props: {
          name: item.species.scientific_name
        }
      });
    },
    getCharacterSelectedStateValue(character) {
      let selectedStateID = this.characterStates[character.id];
      if (selectedStateID) {
        let selectedState = character.states.find(function(state) {
          return state.id == selectedStateID;
        });
        return selectedState.label;
      }
    },
    filterSpeciesList(species) {
      for (const [id, state] of Object.entries(this.characterStates)) {
        // If we have a state defined for this character AND
        // species has no entry OR
        // character states do not match the species, return false (hide species)
        if (
          state &&
          (!species.character_states[id] ||
            species.character_states[id].indexOf(state) == -1)
        ) {
          return false;
        }
      }
      return true;
    },
    onResetButtonTap() {
      this.characterStates = {};
      this.refreshChacterList();
    },
    showModalForm(character) {
      this.$showModal(ModalForm, {
        props: {
          character: character,
          selectedState: this.characterStates[character.id]
        },
        fullscreen: false,
        animated: true,
        stretched: true,
        dimAmount: 0.5
      }).then(
        function(selectedState) {
          // If undefined, user has cancelled the modal
          // If user has selected "remove", return value will be null
          if (typeof selectedState !== "undefined") {
            // Reactive update
            this.$set(this.characterStates, character.id, selectedState);
            this.refreshChacterList();
          }
        }.bind(this)
      );
    },
    refreshChacterList() {
      this.$refs.characterList.refresh();
    },
    isReleventCharacter(character) {
      return this.releventCharacterIDs.indexOf(character.id) !== -1;
    },
    sortInsects(insectA, insectB) {
      return insectA.common_name < insectB.common_name ? -1 : 1;
    }
  }
};
</script>
]<template>
  <Page class="page">
    <Header page-title="Identify" />
    <GridLayout rows="*, 160">
      <StackLayout row="0">
        <SegmentedBar
          v-model="selectedCharacterGroup"
          class="segmented-bar"
          width="100%"
          height="30"
        >
          <SegmentedBarItem
            v-for="group in characterGroups"
            :title="group.title"
            v-bind:key="group.key"
            class="segmented-bar-item"
          />
        </SegmentedBar>
        <SubHeader>
          <Label :text="characterGroupHelp" />
        </SubHeader>

        <ListView
          for="character in characterListByGroup"
          ref="characterList"
          class="character-list list-view"
        >
          <v-template>
            <GridLayout
              columns="*, 140"
              :class="isReleventCharacter(character) ? 'active' : 'disabled'"
              @tap="showModalForm(character)"
              verticalAlignment="middle"
              class="character-list-item list-view-item"
            >
              <Label
                col="0"
                :text="character.label"
                textWrap="true"
                class="character-label"
                verticalAlignment="middle"
              />
              <StackLayout
                col="1"
                class="character-state"
                orientation="horizontal"
                width="140"
                height="30"
                verticalAlignment="middle"
              >
                <Label
                  width="105"
                  :text="getCharacterSelectedStateValue(character)"
                  verticalAlignment="middle"
                />
                <Label
                  text.decode="&#xf078;"
                  class="fa page-icon"
                  verticalAlignment="middle"
                />
              </StackLayout>
            </GridLayout>
          </v-template>
        </ListView>
      </StackLayout>

      <StackLayout row="1" class="identify-results" verticalAlignment="bottom">
        <GridLayout
          columns="auto, 40, *, 80"
          height="24"
          verticalAlignment="middle"
          class="m-t-5 m-b-5 page-side-margins"
        >
          <Label col="0" text="Current possibilities:" />
          <Label
            col="1"
            class="current-possibilities-count"
            :text="currentPosibilitiesCount"
            textAlignment="center"
          />
          <Button
            class="btn btn-dark-grey btn-small btn-rounded-sm"
            col="3"
            width="80"
            text="Reset"
            @tap="onResetButtonTap"
          />
        </GridLayout>

        <ScrollView orientation="horizontal">
          <StackLayout orientation="horizontal" height="130">
            <GridLayout
              @tap="onSpeciesTap({ species })"
              v-for="species in speciesList"
              v-bind:key="species.id"
              :columns="speciesList.length"
              width="130"
              height="130"
              rows="*, 30"
              class="identify-results-item"
            >
              <Image
                height="100"
                width="130"
                :src="species.images[0].file | imageAssetPath"
                row="0"
                stretch="aspectFill"
              />
              <Label
                :text="species.common_name"
                class="nameLabel"
                row="1"
              ></Label>
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
          key: "where",
          title: "Where",
          help: "Where did the bite happen?"
        },
        {
          key: "when",
          title: "When",
          help: "What time of day / frequency?"
        },
        {
          key: "what",
          title: "What",
          help: "What did the species look like?"
        },
        {
          key: "symptoms",
          title: "Symptoms",
          help: "What symptoms do you have?"
        }
      ],
      selectedCharacterGroup: 0,
      characterStates: {}
    };
  },
  computed: {
    speciesList() {
      return this.$store.state.species.filter(this.filterSpeciesList);
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
  mounted() {
    this.$updateSelectedPage("identify");
  },
  methods: {
    onSpeciesTap(item) {
      this.$goto("factSheet", {
        props: {
          id: item.species.id
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
      if (this.isReleventCharacter(character)) {
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
      }
    },
    refreshChacterList() {
      this.$refs.characterList.refresh();
    },
    isReleventCharacter(character) {
      if (this.characterStates[character.id]) {
        return true;
      }

      return this.releventCharacterIDs.indexOf(character.id) != -1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../app-variables";

.character-list {
  separator-color: $white;
  margin-top: $page-margin;

  .character-list-item {
    padding: 3 $page-margin;
  }

  .character-label {
    padding-right: $page-margin;
  }
  .character-state {
    background-color: $light-grey;
    border-radius: 5;
    padding-left: 10;
    padding-right: 10;
    margin: 4;
    margin-right: $page-margin;
    vertical-align: middle;
    label.fa {
      font-size: 14;
    }
  }
  .disabled {
    .character-state {
      opacity: 0.4;
    }
    .character-label {
      color: lighten($primary, 40%);
    }
  }
}

.identify-results {
  background: $light-grey;
  border-top-width: 1px;
  border-top-color: darken($light-grey, 10);

  .current-possibilities-count {
    background-color: lighten($light-grey, 50);
    border-radius: 5;
    margin-left: $page-margin;
    padding: 2;
  }
  .identify-results-item {
    margin-right: 2;
    background-color: $white;

    label {
      padding-left: $page-margin;
      padding-right: $page-margin;
    }
  }
}
</style>

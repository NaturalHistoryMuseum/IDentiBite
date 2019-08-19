

<template>
  <Page>
    <Header page-title="Insect ID" />
    <GridLayout rows="*, 120">
      <StackLayout row="0">
        <SegmentedBar v-model="selectedCharacterGroup">
          <SegmentedBarItem
            v-for="group in characterGroups"
            :title="group.title"
            v-bind:key="group"
          />
        </SegmentedBar>
        <Label :text="help"></Label>
        <Button text="Reset" @tap="onResetButtonTap" />
        <RadListView for="character in characterListByGroup">
          <v-template>
            <GridLayout columns="*, *">
              <Label col="0" :text="character.label" textWrap="true" />
              <PickerField
                col="1"
                hint="<Select>"
                :id="character.id"
                :ref="character.id"
                padding="10"
                for="item in character.states"
                textField="label"
                valueField="id"
                :pickerTitle="character.label"
                :selectedValue="characterStates[character.id]"
                @selectedValueChange="dropDownSelectedIndexChanged"
                v-bind="$characterStates"
              >
                <v-template>
                  <StackLayout>
                    <Label :text="item.label" class="item-template-label red-label" margin="20"></Label>
                  </StackLayout>
                </v-template>
              </PickerField>
            </GridLayout>
          </v-template>
        </RadListView>
      </StackLayout>

      <StackLayout row="1">
        <Label>Current possibilities {{ currentPosibilitiesCount }}</Label>
        <RadListView
          ref="listView"
          orientation="horizontal"
          for="insect in insectList"
          @itemTap="onInsectTap"
        >
          <v-template>
            <FlexboxLayout class="insect">
              <StackLayout class="item" orientation="vertical">
                <Image height="100" :src="insect.images[0] | imageAssetPath" />
                <Label :text="insect.common_name" class="nameLabel"></Label>
              </StackLayout>
            </FlexboxLayout>
          </v-template>
        </RadListView>
      </StackLayout>
    </GridLayout>
  </Page>
</template>


<script>
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
    insectList() {
      return this.$store.state.insects.filter(this.filterSpeciesList);
    },
    selectedGroupKey() {
      return this.characterGroups[this.selectedCharacterGroup].key;
    },
    characterListByGroup() {
      return this.$store.state.characters[this.selectedGroupKey];
    },
    help() {
      return this.characterGroups[this.selectedCharacterGroup].help;
    },
    currentPosibilitiesCount() {
      return this.insectList.length;
    }
    // Filter list of character states - as it's used in the v-model
    // characterStates includes false and undefined values
    // selectedCharacterStates() {
    //   let selectedCharacterStates = {};
    //   for (const [characterID, characterState] of Object.entries(
    //     this.characterStates
    //   )) {
    //     if (typeof characterState !== "undefined" && characterState) {
    //       selectedCharacterStates[characterID] = characterState;
    //     }
    //   }

    //   return selectedCharacterStates;
    // }
  },
  methods: {
    onInsectTap(args) {
      this.$goto("factSheet", {
        props: {
          name: args.item.scientific_name
        }
      });
    },
    // getCharacterStateSelectedValue(character) {
    //   return this.characterStates[character.id];
    // },
    dropDownSelectedIndexChanged(event) {
      // Reactive update
      this.$set(
        this.characterStates,
        event.object.id,
        event.object.selectedValue
      );
    },
    filterSpeciesList(species) {
      for (const [characterID, characterState] of Object.entries(
        this.characterStates
      )) {
        // If any character states do not match the species, return flase (hide species)
        if (
          species.character_states[characterID].indexOf(characterState) == -1
        ) {
          return false;
        }
      }
      return true;
    },
    onResetButtonTap() {
      for (var characterID in this.characterStates) {
        console.log(characterID);
        this.$delete(this.characterStates, characterID);
      }
      //   console.log("RESET");
      // Object.assign({}, this.characterStates, {});
      //   this.characterStates = {};
    }
  }
};
</script>


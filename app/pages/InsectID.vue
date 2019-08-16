

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
                :selectedValue="getCharacterStateSelectedValue(character)"
                @selectedValueChange="dropDownSelectedIndexChanged"
              >
                <v-template>
                  <StackLayout>
                    <Label :text="item.label" class="item-template-label red-label" margin="20"></Label>
                  </StackLayout>
                </v-template>
              </PickerField>
            </GridLayout>
          </v-template>
          <v-template if="character.is_yes_no">
            <StackLayout>
              <GridLayout columns="*, *">
                <Label col="0" :text="character.label" textWrap="true" />
                <Switch
                  col="1"
                  :id="character.id"
                  :ref="character.id"
                  v-model="characterStates[character.id]"
                />
              </GridLayout>
            </StackLayout>
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
import { ValueList } from "nativescript-drop-down";

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
    },
    // Filter list of character states - as it's used in the v-model
    // characterStates includes false and undefined values
    selectedCharacterStates() {
      let selectedCharacterStates = {};
      for (const [characterID, characterState] of Object.entries(
        this.characterStates
      )) {
        if (typeof characterState !== "undefined" && characterState) {
          selectedCharacterStates[characterID] = characterState;
        }
      }

      return selectedCharacterStates;
    }
  },
  methods: {
    onInsectTap(args) {
      this.$goto("factSheet", {
        props: {
          name: args.item.scientific_name
        }
      });
    },
    getCharacterStateSelectedValue(character) {
      return this.characterStates[character.id];
    },
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
        this.selectedCharacterStates
      )) {
        console.log(species.character_states[characterID]);
        // species;
        // console.log(characterID, characterState);
      }
      //   for (var characterID in this.selectedCharacterStates) {
      //     let characterState = this.characterStates[characterID];
      //     console.log(characterID);
      //     console.log(characterState);
      //   }
      return false;
    }
  }
};
</script>


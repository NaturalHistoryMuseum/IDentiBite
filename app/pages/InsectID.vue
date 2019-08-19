

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
        <RadDataForm
          :source="person"
          @propertyCommitted="dfPropertyCommitted"
          @propertyCommit="dfPropertyCommitted"
        >
          <TKEntityProperty
            v-tkDataFormProperty
            name="type"
            displayName="Type"
            index="3"
            valuesProvider="2D, 3D"
          >
            <TKPropertyEditor v-tkEntityPropertyEditor type="List"></TKPropertyEditor>
          </TKEntityProperty>
          <TKEntityProperty
            v-tkDataFormProperty
            name="type2"
            displayName="Type"
            index="3"
            valuesProvider="2D, 3D"
          >
            <TKPropertyEditor v-tkEntityPropertyEditor type="List"></TKPropertyEditor>
          </TKEntityProperty>
        </RadDataForm>
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
      characterStates: {
        "86": null
      },
      person: {
        type: null,
        type2: null
      }
      //   characterStatesMetadata: {
      //     propertyAnnotations: [
      //       {
      //         name: "86",
      //         displayName: "Street Number2"
      //       }
      //     ]
      //   }
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
    characterStatesComp() {
      let states = {};
      var x;
      // FIXME: Use map
      for (x in this.$store.state.characters) {
        let char = this.$store.state.characters[x];
        states[char.id] = null;
      }
      console.log(states);
      console.log("XXXXXXXXXXXXXTXTXTXTXTXTXTXTXTXTXTXT");
      return states;
    },
    characterStatesMetadata() {
      let metadata = {
        isReadOnly: false,
        commitMode: "Immediate",
        validationMode: "Immediate",
        propertyAnnotations: []
      };
      for (let index in this.$store.state.characters) {
        let character = this.$store.state.characters[index];
        metadata.propertyAnnotations.push({
          name: character["id"].toString(),
          displayName: character["label"],
          index: Number(index),
          editor: "Picker",
          valuesProvider: ["New York", "Washington", "Los Angeles"]
        });
      }
      console.log("XXXXXXXXXXXXXTXTXTXTXTXTXTXTXTXTXTXT");
      console.log(metadata);
      return metadata;
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
  create() {
    console.log("CREATED");
    // this.characterStates = {
    //   256: null
    // };
  },
  mounted() {
    // this.characterStates = this.$store.state.characters.map(function(
    //   character
    // ) {
    //   return {
    //     [character.id]: null
    //   };
    // });
    console.log("MOUNTED XXXX XXXX XXXX XXX");

    // this.characterStates = {
    //   256: null
    // };
    // console.log(this.characterStates);
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
      //   for (const [characterID, characterState] of Object.entries(
      //     this.characterStates
      //   )) {
      //     // If any character states do not match the species, return flase (hide species)
      //     if (
      //       species.character_states[characterID].indexOf(characterState) == -1
      //     ) {
      //       return false;
      //     }
      //   }
      return true;
    },
    onResetButtonTap() {
      for (var x in this.person) {
        this.person[x] = null;
      }
      //   console.log("RESET");
      // Object.assign({}, this.characterStates, {});
      //   this.characterStates = {};
    },
    dfPropertyCommitted() {
      console.log("COMMIT");
      console.log(this.person.name);
    }
  }
};
</script>


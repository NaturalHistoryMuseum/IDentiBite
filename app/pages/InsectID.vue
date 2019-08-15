

<template>
  <Page>
    <Header page-title="Insect ID" />
    <GridLayout rows="*, 130">
      <StackLayout row="0">
        <SegmentedBar v-model="selectedCharacterGroup">
          <SegmentedBarItem
            v-for="group in characterGroups"
            :title="group.title"
            v-bind:key="group"
          />
        </SegmentedBar>
        <Label :text="help"></Label>
        <Switch col="1" checkedChange="dropDownSelectedIndexChanged" />
        <ListView for="character in characterList">
          <v-template>
            <GridLayout columns="*, 50">
              <Label col="0" :text="character.label" />
              <DropDown
                col="1"
                :items="getCharacterStateValuesList(character)"
                accessoryViewVisible="false"
                backgroundColor="red"
                :id="character.id"
                :ref="character.id"
                :selectedIndex="getCharacterStatesSelectedIndex()"
                @selectedIndexChanged="dropDownSelectedIndexChanged"
              />
            </GridLayout>
          </v-template>
          <v-template if="character.states.length == 2">
            <StackLayout>
              <GridLayout columns="*, 50">
                <Label col="0" :text="character.label" textWrap="true" />
                <Switch col="1" v-model="characters[character.id]" />
              </GridLayout>
            </StackLayout>
          </v-template>
        </ListView>
      </StackLayout>

      <RadListView
        row="1"
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
          help: "What did it look like?"
        }
      ],
      selectedCharacterGroup: 0,
      characters: {}
    };
  },
  computed: {
    insectList() {
      return this.$store.state.insects;
    },
    selectedGroupKey() {
      return this.characterGroups[this.selectedCharacterGroup].key;
    },
    characterList() {
      return this.$store.state.characters[this.selectedGroupKey];
    },
    help() {
      return this.characterGroups[this.selectedCharacterGroup].help;
    }
  },
  methods: {
    getCharacterStateValuesList(character) {
      // FIXME: Fix in source data
      let options = character.states.map(function(state) {
        return { value: state.id, display: state.label };
      });
      return new ValueList(options);
    },
    getCharacterStatesSelectedIndex(args) {
      // AARRGGGH we do need it here
      console.log(args);
      return 0;
      //   if (this.selectedIndex.indexOf(characterId)) {
      //     return this.selectedIndex[characterId];
      //   }
    },
    onSelectedIndexChange(insect) {
      //   console.log("HEYEYEEY");
    },
    onInsectTap(args) {
      this.$goto("factSheet", {
        props: {
          name: args.item.scientific_name
        }
      });
    },
    dropDownSelectedIndexChanged(args) {
      this.characters[args.object.id] = args.object.items.getValue(
        args.newIndex
      );
    }
  }
};
</script>


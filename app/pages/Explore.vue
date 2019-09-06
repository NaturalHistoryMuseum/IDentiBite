<template>
  <Page class="page">
    <Header page-title="Explore" />
    <GridLayout rows="auto, *">
      <SubHeader row="0" />
      <RadListView
        ref="exploreListView"
        :items="speciesList"
        @itemTap="onSpeciesTap"
        :groupingFunction="getSpeciesGroups"
        :sortingFunction="sortSpecies"
        enableCollapsibleGroups="true"
        class="list-view"
        row="1"
      >
        <v-template name="group">
          <Label
            :text="item.category"
            class="list-group"
            isUserInteractionEnabled="false"
          />
        </v-template>
        <v-template>
          <ListItem
            :file-name="item.images[0]['file']"
            :title="item.common_name"
            :subtitle="item.scientific_name"
            class="list-group-item"
          />
        </v-template>
      </RadListView>
    </GridLayout>
  </Page>
</template>


<script>
import ListItem from "../components/ListItem";

export default {
  computed: {
    speciesList() {
      return this.$store.state.species;
    }
  },
  components: {
    ListItem
  },
  methods: {
    onSpeciesTap(event) {
      this.$goto("factSheet", {
        props: {
          id: event.item.id
        }
      });
    },
    getSpeciesGroups(species) {
      return species.group;
    },
    sortSpecies(speciesA, speciesB) {
      return speciesA.common_name > speciesB.common_name ? -1 : 1;
    }
  },
  mounted() {
    this.$updateSelectedPage("explore");
  }
};
</script>

<style scoped lang="scss">
@import "../app-variables";
.list-view {
  background-color: $light-grey;
  .list-group-item {
    background-color: $white;
  }
}
</style>

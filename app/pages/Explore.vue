


<template>
  <Page>
    <Header page-title="Explore" />
    <StackLayout>
      <SubHeader />
      <RadListView
        ref="exploreListView"
        :items="speciesList"
        @itemTap="onSpeciesTap"
        :groupingFunction="getSpeciesGroups"
        :sortingFunction="sortSpecies"
        enableCollapsibleGroups="true"
      >
        <v-template name="group">
          <Label
            :text="item.category"
            class="body-header"
            isUserInteractionEnabled="false"
          />
        </v-template>
        <v-template>
          <ListItem
            :file-name="item.images[0]['file']"
            :title="item.common_name"
            :subtitle="item.scientific_name"
          />
        </v-template>
      </RadListView>
    </StackLayout>
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
          name: event.item.scientific_name
        }
      });
    },
    getSpeciesGroups(species) {
      return species.group;
    },
    sortSpecies(speciesA, speciesB) {
      return speciesA.common_name > speciesB.common_name ? -1 : 1;
    }
  }
};
</script>


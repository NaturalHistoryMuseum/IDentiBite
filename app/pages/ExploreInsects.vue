


<template>
  <Page>
    <Header page-title="Explore insects" />
    <StackLayout>
      <RadListView
        ref="listView"
        for="insect in insectList"
        @itemTap="onInsectTap"
        :groupingFunction="getInsectGroups"
        :sortingFunction="sortInsects"
      >
        <v-template name="groupview">
          <Label :text="insect.group" class="insectGroup" />
        </v-template>
        <v-template>
          <FlexboxLayout class="insect">
            <Image width="50" height="50" :src="insect.images[0] | imageAssetPath" />
            <Label :text="insect.common_name" class="nameLabel"></Label>
          </FlexboxLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
</template>


<script >
export default {
  computed: {
    insectList() {
      return this.$store.state.insects;
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
    getInsectGroups(insect) {
      return insect.group;
    },
    sortInsects(insectA, insectB) {
      return insectA.common_name > insectB.common_name ? -1 : 1;
    }
  }
};
</script>


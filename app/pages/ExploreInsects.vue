


<template>
  <Page>
    <Header page-title="Explore insects" />
    <StackLayout @tap="$tapPreventPropagation">
      <RadListView
        ref="exploreListView"
        for="insect in insectList"
        @itemTap="onInsectTap"
        :groupingFunction="getInsectGroups"
        :sortingFunction="sortInsects"
        enableCollapsibleGroups="true"
      >
        <v-template name="groupview">
          <GridLayout columns="*" backgroundColor="red">
            <Label :text="insect.group" class="insectGroup" isUserInteractionEnabled="false" />
          </GridLayout>
        </v-template>
        <v-template>
          <GridLayout columns="50, *" backgroundColor="pink">
            <Image
              @tap="$tapPreventPropagation"
              col="0"
              width="50"
              height="50"
              :src="insect.images[0] | imageAssetPath"
            />
            <Label col="1" :text="insect.common_name" class="nameLabel"></Label>
          </GridLayout>
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
    onInsectTap(event) {
      this.$goto("factSheet", {
        props: {
          name: event.item.scientific_name
        }
      });
    },
    getInsectGroups(insect) {
      return insect.group;
    },
    sortInsects(insectA, insectB) {
      return insectA.common_name > insectB.common_name ? -1 : 1;
    },
    outerTap() {
      console.log("outerTap");
    }
  }
};
</script>


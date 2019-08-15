<template>
  <Page>
    <Header :page-title="insectName" />
    <StackLayout orientation="Vertical">
      <label :text="insect.genus" />
      <Label
        :text="description"
        v-for="description in insect.description"
        v-bind:key="description"
        textWrap="true"
      />
      <Image :src="image | imageAssetPath" v-for="image in insect.images" v-bind:key="image" />
    </StackLayout>
  </Page>
</template>


<script>
export default {
  props: ["name"],
  computed: {
    insect() {
      return this.$store.getters.getInsectByScientificName(this.name);
    },
    insectName() {
      return `${this.insect.common_name} ${this.insect.group}`;
    }
  }
};
</script>

<style scoped>
</style>

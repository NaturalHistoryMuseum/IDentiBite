<template>
  <Page>
    <StackLayout orientation="Vertical">
      <Label class="fa" @tap="$showDrawer()" :text="'fa-bars' | fonticon" />
      <Image src="~/assets/images/NativeScript-Vue.png" />
      <Label text="Start Insect ID" @tap="$goto('insectId')"></Label>
      <Label text="Explore Insects" @tap="$goto('exploreInsects')"></Label>
    </StackLayout>
  </Page>
</template>


<script >
export default {};
</script>

<style scoped>
</style>

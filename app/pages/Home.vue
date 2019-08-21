<template>
  <Page>
    <StackLayout orientation="Vertical">
      <Label class="fa right" @tap="$showDrawer()" :text="'fa-bars' | fonticon" />
      <Image :src="'logo.png' | imageAssetPath" />
      <Button text="Start Insect ID" @tap="$goto('identify')"></Button>
      <Button text="Explore Insects" @tap="$goto('exploreInsects')"></Button>
      <Button text="Treatment" @tap="$goto('treatment')"></Button>
    </StackLayout>
  </Page>
</template>


<script >
export default {};
</script>

<style scoped>
</style>

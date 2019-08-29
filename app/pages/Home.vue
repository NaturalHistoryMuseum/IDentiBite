<template>
  <Page actionBarHidden="true">
    <StackLayout>
      <Button
        class="fa right"
        @tap="$showDrawer()"
        :text="'fa-bars' | fonticon"
      />
      <Image :src="'logo.png' | imageAssetPath" />
      <Button text="Identify" @tap="$goto('identify')"></Button>
      <Button text="Explore" @tap="$goto('explore')"></Button>
      <Button text="Treatment" @tap="$goto('treatment')"></Button>
    </StackLayout>
  </Page>
</template>


<script >
export default {};
</script>

<style scoped>
</style>

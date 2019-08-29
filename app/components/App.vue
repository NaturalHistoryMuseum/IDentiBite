<template>
  <Page actionBarHidden="true" class="page">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#eee">
        <Label class="h1" text="IDentiBite"></Label>
        <Label text="Home" @tap="$goto('home')"></Label>
        <Label text="Identify" @tap="$goto('identify')"></Label>
        <Label text="Explore" @tap="$goto('explore')"></Label>
        <Label text="Treatment" @tap="$goto('treatment')"></Label>
        <StackLayout class="hr-light m-10"></StackLayout>
        <Label text="About"></Label>
      </StackLayout>
      <Frame ~mainContent id="mainContent">
        <HomePage />
      </Frame>
    </RadSideDrawer>
  </Page>
</template>

<script >
import Vue from "nativescript-vue";

import HomePage from "~/pages/Home";

export default {
  components: { HomePage: HomePage },
  mounted() {
    Vue.prototype.drawer = this.$refs.drawer.nativeView;
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>

<template>
  <Page actionBarHidden="true">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#eee">
        <Label class="h1" text="IDentiBite"></Label>
        <Label text="Home" @tap="$goto('index')"></Label>
        <Label text="Start Insect ID" @tap="$goto('insectId')"></Label>
        <Label text="Explore Insects" @tap="$goto('exploreInsects')"></Label>
        <StackLayout class="hr-light m-10"></StackLayout>
        <Label text="About"></Label>
      </StackLayout>
      <Frame ~mainContent id="mainContent">
        <IndexPage />
      </Frame>
    </RadSideDrawer>
  </Page>
</template>

<script >
import Vue from "nativescript-vue";

import IndexPage from "~/pages/Index";

export default {
  components: { IndexPage: IndexPage },
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

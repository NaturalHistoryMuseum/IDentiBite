<template>
  <page-template>
    <StackLayout orientation="Vertical">
      <Button text="Start Insect ID" @tap="$goto('insectId')"></Button>
      <Button text="Explore Insects" @tap="$goto('exploreInsects')"></Button>
    </StackLayout>
  </page-template>
</template>


<script >
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  methods: {
    onBackTap() {
      frameModule.topmost().goBack();
    },
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
    onToggleDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    }
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

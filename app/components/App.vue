<template>
  <RadSideDrawer>
    <GridLayout tkDrawerContent>
      <Label text="Side Menu"></Label>
    </GridLayout>

    <page-router-outlet tkMainContent></page-router-outlet>
  </RadSideDrawer>
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

<template>
  <Page loaded="pageLoaded">
    <ActionBar :title="$props.pageTitle" class="action-bar"></ActionBar>
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sideStackLayout" backgroundColor="#eee">
        <StackLayout class="sideTitleStackLayout">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <StackLayout class="sideStackLayout">
          <Label text="Primary" class="sideLabel sideLightGrayLabel"></Label>
          <Label text="Social" class="sideLabel"></Label>
          <Label text="Promotions" class="sideLabel"></Label>
          <Label text="Labels" class="sideLabel sideLightGrayLabel"></Label>
          <Label text="Important" class="sideLabel"></Label>
          <Label text="Starred" class="sideLabel"></Label>
          <Label text="Sent Mail" class="sideLabel"></Label>
          <Label text="Drafts" class="sideLabel"></Label>
        </StackLayout>
        <Label
          text="Close Drawer"
          color="lightgray"
          padding="10"
          style="horizontal-align: center"
          @tap="onCloseDrawerTap"
        ></Label>
      </StackLayout>
      <StackLayout ~mainContent>
        <slot></slot>
      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>


<script >
export default {
  props: {
    pageTitle: {
      default: "YELLOW",
      type: String
    }
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

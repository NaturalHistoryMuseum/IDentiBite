<template>
  <Page loaded="pageLoaded">
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent class="sideStackLayout" backgroundColor="#eee">
        <ActionBar>
          <GridLayout width="100%" columns="auto, *">
            <Label class="fa" @tap="onOpenDrawerTap()" :text="'fa-bars' | fonticon" />

            <Label class="title" :text="HELLO" col="1" />
          </GridLayout>
        </ActionBar>
        <StackLayout class="sideTitleStackLayout">
          <Label text="Navigation Menu"></Label>
        </StackLayout>
        <StackLayout class="sideStackLayout">
          <Label text="Start Insect ID" @tap="$goto('insectId')"></Label>
          <Label text="Explore Insects" @tap="$goto('exploreInsects')"></Label>
          <StackLayout class="hr-light m-10"></StackLayout>
          <Label text="About"></Label>
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
      default: "YYYY",
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
.fa {
  font-family: "FontAwesome", "fontawesome-webfont";
}
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

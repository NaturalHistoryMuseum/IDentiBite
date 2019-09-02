<template>
  <ActionBar class="action-bar" flat="true">
    <NavigationButton
      android.systemIcon="ic_menu_back"
      @tap="onBackTap"
      ios.position="left"
      id="back-action-item"
    />
    <ActionItem
      ios:visibility="collapsed"
      icon="res://menu"
      @tap="onDrawerButtonTap"
    ></ActionItem>

    <ActionItem
      icon="res://navigation/menu"
      android:visibility="collapsed"
      @tap="onDrawerButtonTap"
      ios.position="right"
      height="50"
    >
    </ActionItem>
    <Label class="action-bar-title" :text="pageTitle"></Label>
  </ActionBar>
</template>

<script>
import * as utils from "~/shared/utils";
import * as frameModule from "tns-core-modules/ui/frame";

export default {
  props: ["pageTitle"],
  methods: {
    onBackTap() {
      frameModule.topmost().goBack();
    },
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../app-variables";

#back-action-item {
  color: #fff;
  font-size: 40;
  width: 40;
  height: 40;
}
</style>
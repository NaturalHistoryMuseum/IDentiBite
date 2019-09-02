<template>
  <ActionBar class="action-bar" flat="true">
    <NavigationButton icon="res://back" @tap="onBackTap" ios.position="left" />
    <ActionItem @tap="onDrawerButtonTap" ios.position="right" height="50">
      <Label text.decode="&#xf0c9;" class="fa" />
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
  font-size: 1;
  width: 1;
  height: 1;
}
</style>
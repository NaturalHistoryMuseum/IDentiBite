<template>
  <ActionBar class="action-bar" flat="true">
    <NavigationButton android.systemIcon="ic_menu_back" @tap="onBackTap" />
    <GridLayout columns="*, 120" width="100%">
      <Label col="0" :text="pageTitle" />
      <Button
        col="1"
        class="fa"
        @tap="$showDrawer()"
        :text="'fa-bars' | fonticon"
      ></Button>
    </GridLayout>
  </ActionBar>
</template>

<script>
import * as frameModule from "tns-core-modules/ui/frame";

export default {
  props: ["pageTitle"],
  methods: {
    onBackTap() {
      frameModule.topmost().goBack();
    }
  }
};
</script>

<style lang="scss" scoped>
.action-bar {
  label {
    font-size: 26px;
  }
}
</style>
<template>
  <StackLayout @tap="onAnchorTap">
    <slot></slot>
  </StackLayout>
</template>

<script>
let utilityModule = require("utils/utils");
export default {
  props: ["href"],
  methods: {
    onAnchorTap() {
      console.log("OPEN");
      utilityModule.openUrl(this.href);
    }
  }
};
</script>
<template>
  <StackLayout
    class="subheader vertical-align"
    :height="hasDefaultSlot ? 30 : 3"
  >
    <slot></slot>
  </StackLayout>
</template>

<script>
export default {
  computed: {
    hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
};
</script>

<style lang="scss">
@import "../app-variables";

.subheader {
  background: $dark-red;
  color: $white;
  padding-left: $page-margin;
  padding-right: $page-margin;
}
</style>
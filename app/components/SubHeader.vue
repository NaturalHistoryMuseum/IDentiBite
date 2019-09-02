<template>
  <StackLayout
    class="subheader"
    minHeight="3"
    :class="{ 'subheader-has-content': hasDefaultSlot }"
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

<style lang="scss" scoped>
@import "../app-variables";

.subheader {
  background: $dark-red;
  color: $white;
  padding-left: $page-margin;
  padding-right: $page-margin;
}

.subheader-has-content {
  padding-top: 6;
  padding-bottom: 6;
}
</style>
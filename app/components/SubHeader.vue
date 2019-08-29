<template>
  <StackLayout class="subheader" minHeight="5">
    <slot></slot>
  </StackLayout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.subheader {
  background: $dark-red;
  //   margin: 0 0 2px 0;
  //   min-height: 5px;
  color: $white;
  //   padding: 15px 20px;
}
</style>
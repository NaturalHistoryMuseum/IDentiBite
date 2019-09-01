<template>
  <StackLayout orientation="horizontal" class="m-t-15 m-b-15 body">
    <Label class="fa" :text="'fa-exclamation-circle' | fonticon" width="50" />
    <Label :text="text" textWrap="true" />
  </StackLayout>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
label {
  color: $red;
}
</style>

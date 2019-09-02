<template>
  <StackLayout orientation="horizontal" class="m-t-15 m-b-15 body">
    <Label class="fa" text.decode="&#xf06a;" width="35" />
    <Label :text="text" textWrap="true" />
  </StackLayout>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
@import "../app-variables";
label {
  color: $red;
  font-size: $font-size-default;
}
label.fa {
  font-size: 30;
}
</style>

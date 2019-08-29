<template>
  <StackLayout orientation="horizontal" class="m-t-15 m-b-15 body-item">
    <Label
      class="fa red"
      :text="'fa-exclamation-circle' | fonticon"
      width="50"
    />
    <Label :text="text" class="red" textWrap="true" />
  </StackLayout>
</template>

<script>
export default {
  props: ["text"]
};
</script>

<style lang="scss" scoped>
label {
  //   vertical-align: top;
}
</style>

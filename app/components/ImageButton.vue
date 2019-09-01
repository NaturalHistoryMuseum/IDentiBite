<template>
  <StackLayout
    orientation="horizontal"
    @tap="$emit('tap')"
    class="btn btn-icon"
  >
    <Label class="fa icon" :text="icon | fonticon" />
    <Label
      class="label"
      :text="label"
      verticalAlignment="center"
      width="100%"
    ></Label>
  </StackLayout>
</template>

<script>
export default {
  props: ["icon", "label"]
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 15 0 15 15;
  .icon {
    font-size: 20px;
  }
  .label {
    padding-left: 15;
  }
}
</style>

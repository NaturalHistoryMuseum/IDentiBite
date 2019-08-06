

<template>
  <page-template>
    <StackLayout orientation="Vertical">
      <Button text="Back to Master" @tap="$navigateBack" />
    </StackLayout>
  </page-template>
</template>


<script >
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>


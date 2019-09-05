<template>
  <GridLayout columns="120, *" class="list-item"> 
    <Image
      height="85"
      width="120"
      col="0"
      :src="fileName | imageAssetPath"
      stretch="aspectFill"
      class="list-item-image"
    />
    <StackLayout
      col="1"
      verticalAlignment="middle"
      height="85"
      class="list-item-label"
    >
      <Label :text="title" />
      <Label class="text-muted text-italic" v-if="subtitle" :text="subtitle" />
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../app-variables";

.list-item {
  .list-item-image,
  .list-item-label {
    border-bottom-width: 1;
  }
  .list-item-image {
    border-color: $white;
  }
  .list-item-label {
    padding-left: 30px;
    border-color: $light-grey;
  }
}
</style>

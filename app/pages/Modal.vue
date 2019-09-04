<template>
  <Page actionBarHidden="true">
    <GridLayout class="modal" rows="auto, *, auto">
      <Image :src="image.file | imageAssetPath" rowSpan="3" />
      <Label :text="title" row="0" class="image-header" textWrap="true" />
      <Button
        @tap="onCloseTap"
        class="fa page-icon pull-right"
        text.decode="&#xf00d;"
        row="0"
        width="50"
        height="40"
        horizontalAlignment="right"
        verticalAlignment="top"
      />
      <Label :text="image.credit" textWrap="true" row="2" class="footnote" />
    </GridLayout>
  </Page>
</template>

<script>
import * as frameModule from "tns-core-modules/ui/frame";

export default {
  props: ["title", "image"],
  methods: {
    onCloseTap() {
      // Thanks to andriod modal image roation, we're not really a modal - just go back
      frameModule.topmost().goBack();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../app-variables";

.modal {
  background-color: #000;
  label {
    color: #fff;
    padding: $page-margin;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .image-header {
    padding-top: 13;
    padding-right: 40;
  }
  button {
    color: #fff;
    font-size: 20;
    padding-top: $page-margin;
  }
}
</style>
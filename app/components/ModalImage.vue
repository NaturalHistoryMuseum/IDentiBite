<template>
  <ModalStack dismissEnabled="true" class="modal-container">
    <GridLayout
      cols="*, 50"
      rows="50,*,auto"
      class="modal"
      height="100%"
      width="100%"
    >
      <Image :src="image.file | imageAssetPath" rowSpan="3" colSpan="2" />
      <Label :text="title" textWrap="true" row="0" col="0" />
      <Button
        row="0"
        col="1"
        @tap="closeModal"
        class="pull-right fa"
        :text="'fa-times' | fonticon"
      ></Button>
      <Label
        :text="image.credit"
        textWrap="true"
        row="2"
        colSpan="2"
        class="footnote"
      />
    </GridLayout>
  </ModalStack>
</template>

<script>
export default {
  props: ["title", "image"],
  methods: {
    closeModal() {
      this.$modal.close();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-container {
  padding: 0;
  padding-bottom: 10px;
  .modal {
    margin: 0;
    margin-top: 0;
    border-radius: 0;
    padding: 0;
    background-color: #000;
    label {
      color: #fff;
      padding: 30px;
      background-color: rgba(0, 0, 0, 0.5);
    }
    button {
      margin-right: 30px;
      color: #fff;
    }
  }
}
</style>
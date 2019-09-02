<template>
  <ModalStack
    dismissEnabled="true"
    class="modal-container"
    verticalPosition="top"
    horizontalPosition="left"
  >
    <GridLayout
      columns="*, 60"
      rows="50,*,auto"
      class="modal"
      width="100%"
      height="100%"
    >
      <Image :src="image.file | imageAssetPath" rowSpan="3" colSpan="2" />
      <Label :text="title" textWrap="true" row="0" col="0" />
      <Button
        row="0"
        col="1"
        @tap="closeModal"
        class="fa page-icon pull-right"
        text.decode="&#xf00d;"
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
  padding-bottom: 0;
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
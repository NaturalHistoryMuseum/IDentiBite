<template>
  <ModalStack dismissEnabled="true" class="modal-container">
    <StackLayout class="modal">
      <GridLayout columns="*, 50" class="modal-header" height="60" width="100%">
        <Label
          col="0"
          :text="character.label"
          textWrap="true"
          verticalAlignment="middle"
        />
        <Button
          col="1"
          text.decode="&#xf00d;"
          @tap="closeModal"
          class="fa page-icon"
          verticalAlignment="middle"
          width="50"
        />
      </GridLayout>

      <GridLayout
        columns="*, 40"
        class="modal-form-item"
        v-for="state in character.states"
        v-bind:key="state.id"
        height="40"
        width="70%"
      >
        <Button
          class="page-icon"
          :text="state.label"
          @tap="selectState(state.id)"
        />
        <Button
          col="1"
          class="fa page-icon"
          v-if="isStateSelected(state.id)"
          text.decode="&#xf111;"
          @tap="selectState(state.id)"
          textAlign="left"
        />
        <Button
          col="1"
          class="fa page-icon"
          v-else
          text.decode="&#xf10c;"
          @tap="selectState(state.id)"
        />
      </GridLayout>

      <Button
        text="Remove this filter"
        @tap="removeCharacterState"
        class="btn btn-grey m-t-15 m-b-15"
      />
    </StackLayout>
  </ModalStack>
</template>

<script>
export default {
  props: ["character", "selectedState"],
  methods: {
    isStateSelected(stateID) {
      return this.selectedState == stateID;
    },
    selectState(stateID) {
      this.$modal.close(stateID);
    },
    removeCharacterState() {
      this.$modal.close(null);
    },
    closeModal() {
      this.$modal.close();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../app-variables";
@import "../scss/_mixins.scss";

.modal-container {
  padding: 25;
  padding-bottom: 10;

  .modal {
    // margin: 20;
    font-size: $font-size-default;
    margin-top: 35;
    border-radius: 4;
    background-color: $background;
    width: auto;

    .modal-header {
      @include header-bar;
      font-size: $font-size-medium;
    }

    .modal-form-item {
      margin-top: 5;
      margin-bottom: 5;
      vertical-align: middle;
      text-align: left;
      button {
        font-size: $font-size-default;
        color: $primary;
        margin: 0;
        padding: 0;
        &.fa {
          font-size: 30;
        }
      }
    }
  }
}
</style>
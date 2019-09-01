<template>
  <ModalStack dismissEnabled="true" class="modal-container">
    <StackLayout class="modal">
      <GridLayout columns="*, 40" class="modal-header" height="60" width="100%">
        <Label col="0" :text="character.label" textWrap="true" />
        <Button
          col="1"
          :text="'fa-times' | fonticon"
          @tap="closeModal"
          class="fa"
        />
      </GridLayout>

      <ListView for="state in character.states" class="list-view">
        <v-template>
          <GridLayout
            width="100%"
            columns="*, 40"
            @tap="selectState(state.id)"
            class="list-view-item"
          >
            <Label :text="state.label" />
            <Label
              col="1"
              class="fa"
              :text="
                isStateSelected(state.id)
                  ? 'fa-circle'
                  : 'fa-circle-o' | fonticon
              "
            />
          </GridLayout>
        </v-template>
      </ListView>
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
@import "../scss/_variables.scss";
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

    .list-view {
      width: 60%;
      margin: 10 0;
      separator-color: $background;
      .list-view-item {
        margin-top: 5;
        margin-bottom: 5;
        vertical-align: middle;
        label.fa {
          font-size: 30;
        }
      }
    }
  }
}
</style>
<template>
  <ModalStack dismissEnabled="true" class="modal-container">
    <StackLayout class="modal">
      <Label :text="character.label" textWrap="true" />
      <Button text="REMOVE" @tap="removeCharacterState" />
      <RadListView for="state in character.states">
        <v-template>
          <GridLayout width="100%" columns="*, 80" @tap="selectState(state.id)">
            <Label :text="state.label" />
            <Label
              col="1"
              class="fa"
              :text="isStateSelected(state.id) ? 'fa-circle' : 'fa-circle-o' | fonticon"
            />
          </GridLayout>
        </v-template>
      </RadListView>
      <Button text="REMOVE" @tap="removeCharacterState" />
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
    }
  }
};
</script>

<style>
.modal {
  margin: 20;
  margin-top: 35;
  border-radius: 8;
  /* horizontal-align: center; */
  vertical-align: middle;
  background-color: white;
  width: auto;
  height: 80%;
  padding: 25;
}

.modal-container {
  padding: 25;
  padding-bottom: 10;
}
</style>
<template>
  <StackLayout rows="auto, *" class="sidedrawer sidedrawer-left">
    <StackLayout
      id="sidedrawer-header"
      class="sidedrawer-header vertical-align"
    >
      <Label text="IDentiBite" />
    </StackLayout>

    <ScrollView row="1" class="sidedrawer-content">
      <StackLayout>
        <GridLayout
          columns="auto, *"
          :class="
            'sidedrawer-list-item' +
              (selectedPage === 'home' ? ' selected' : '')
          "
          @tap="$goto('home')"
        >
          <Label col="0" text.decode="&#xf015;" class="fa"></Label>
          <Label col="1" text="Home"></Label>
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'sidedrawer-list-item' +
              (selectedPage === 'identify' ? ' selected' : '')
          "
          @tap="$goto('identify')"
        >
          <Label col="0" text.decode="&#xf002;" class="fa"></Label>
          <Label col="1" text="Identify"></Label>
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'sidedrawer-list-item' +
              (selectedPage === 'explore' ? ' selected' : '')
          "
          @tap="$goto('explore')"
        >
          <Label col="0" text.decode="&#xf188;" class="fa"></Label>
          <Label col="1" text="Explore"></Label>
        </GridLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'sidedrawer-list-item' +
              (selectedPage === 'treatment' ? ' selected' : '')
          "
          @tap="$goto('treatment')"
        >
          <Label col="0" text.decode="&#xf21e;" class="fa"></Label>
          <Label col="1" text="Treatment"></Label>
        </GridLayout>

        <StackLayout class="hr-light"></StackLayout>

        <GridLayout
          columns="auto, *"
          :class="
            'sidedrawer-list-item' +
              (selectedPage === 'about' ? ' selected' : '')
          "
          @tap="$goto('about')"
        >
          <Label col="0" text.decode="&#xf05a;" class="fa"></Label>
          <Label col="1" text="About"></Label>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </StackLayout>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";

export default {
  data() {
    return {
      selectedPage: ""
    };
  },
  mounted() {
    SelectedPageService.getInstance().selectedPage$.subscribe(
      selectedPage => (this.selectedPage = selectedPage)
    );
  }
};
</script>

<style scoped lang="scss">
// Custom common variables
@import "../app-variables";
@import "../scss/mixins";

$sidedrawer-list-item-offset-left: $page-margin;
$sidedrawer-list-icon-offset: $page-margin;
$sidedrawer-list-icon-size: 20;
.sidedrawer {
  &.sidedrawer-left {
    background-color: $ab-background;
    padding: 0;
  }

  .sidedrawer-header {
    @include header-bar;
    padding: 0;
    padding-top: 3;
    padding-bottom: 0;
    font-size: $font-size-large;
    margin-bottom: 0;
    height: 46;
    // label {
    //   vertical-align: middle;
    //   height: 100%;
    //   //   padding: 10 0 30 0;
    // }
  }

  .sidedrawer-content {
    background-color: $side-drawer-background;
  }

  .sidedrawer-list-item {
    padding-left: $sidedrawer-list-item-offset-left;

    label {
      vertical-align: center;
      color: $dark-grey;
    }

    .fa {
      margin-right: $sidedrawer-list-icon-offset;
      font-size: $sidedrawer-list-icon-size;
    }

    &.selected {
      background-color: $item-active-background;

      label {
        color: $item-active-color;
      }
    }
  }
}
</style>
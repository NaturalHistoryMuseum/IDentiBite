<template>
  <GridLayout rows="auto, *" class="sidedrawer sidedrawer-left">
    <StackLayout
      id="sidedrawer-header"
      class="sidedrawer-header vertical-align"
      row="0"
    >
      <Label text="IDentiBite" class="h1" />
    </StackLayout>

    <ScrollView row="1" class="sidedrawer-content">
      <GridLayout rows="*, auto" height="100%">
        <StackLayout row="0">
          <GridLayout
            columns="auto, *"
            class="sidedrawer-list-item"
            :class="selectedPage === 'home' ? ' selected' : ''"
            @tap="$goto('home')"
          >
            <Label col="0" text.decode="&#xf015;" class="fa" />
            <Label col="1" text="Home" />
          </GridLayout>

          <GridLayout
            columns="auto, *"
            class="sidedrawer-list-item"
            :class="selectedPage === 'identify' ? ' selected' : ''"
            @tap="$goto('identify')"
          >
            <Label col="0" text.decode="&#xf002;" class="fa" />
            <Label col="1" text="Identify" />
          </GridLayout>

          <GridLayout
            columns="auto, *"
            class="sidedrawer-list-item"
            :class="selectedPage === 'explore' ? ' selected' : ''"
            @tap="$goto('explore')"
          >
            <Label col="0" text.decode="&#xf188;" class="fa" />
            <Label col="1" text="Explore" />
          </GridLayout>

          <GridLayout
            columns="auto, *"
            class="sidedrawer-list-item"
            :class="selectedPage === 'treatment' ? ' selected' : ''"
            @tap="$goto('treatment')"
          >
            <Label col="0" text.decode="&#xf21e;" class="fa" />
            <Label col="1" text="Treatment" />
          </GridLayout>

          <StackLayout class="hr-light" />

          <GridLayout
            columns="auto, *"
            class="sidedrawer-list-item"
            :class="selectedPage === 'about' ? ' selected' : ''"
            @tap="$goto('about')"
          >
            <Label col="0" text.decode="&#xf05a;" class="fa" />
            <Label col="1" text="About" />
          </GridLayout>
        </StackLayout>
        <GridLayout columns="*, auto" row="1" class="sidedrawer-footer">
          <StackLayout
            col="0"
            horizontalAlignment="left"
            id="credit"
            width="100%"
            verticalAlignment="bottom"
          >
            <Label text="Dr Alex Kew" />
            <Label text="In association with" class="text-muted" />
          </StackLayout>
          <StackLayout
            col="1"
            horizontalAlignment="right"
            verticalAlignment="bottom"
          >
            <Anchor href="https://www.nhm.ac.uk/" class="pull-right">
              <Image src="res://nhm" height="40" />
            </Anchor>
          </StackLayout>
        </GridLayout>
      </GridLayout>
    </ScrollView>
  </GridLayout>
</template>

<script>
import * as utils from "~/shared/utils";
import SelectedPageService from "~/shared/selected-page-service";
import { isIOS } from "tns-core-modules/platform";

export default {
  data() {
    return {
      selectedPage: ""
    };
  },
  mounted() {
    // Not sure why, but this causes an error in Android
    // Attempt to use cleared object reference
    // So no highlighted menu items for android users
    if (isIOS) {
      SelectedPageService.getInstance().selectedPage$.subscribe(
        selectedPage => (this.selectedPage = selectedPage)
      );
    }
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
    height: 47;
    label.h1 {
      font-size: $font-size-large;
      color: $white;
      margin: 0;
      padding: 0;
      padding-bottom: 0;
    }
  }

  .sidedrawer-content {
    background-color: $side-drawer-background;

    .sidedrawer-footer {
      background-color: $light-grey;
      padding: $page-margin;

      StackLayout {
        vertical-align: bottom;

        label {
          text-align: left;
          font-size: 14;
          text-transform: uppercase;
          margin-bottom: 3;
          color: $dark-grey;

          &.text-muted {
            font-size: 10;
            margin-bottom: 0;
            text-transform: none;
          }
        }
      }
    }
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
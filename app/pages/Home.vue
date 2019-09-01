<template>
  <Page actionBarHidden="true" id="home">
    <ScrollView>
      <StackLayout>
        <Button
          class="fa icon icon-red pull-right"
          @tap="$showDrawer()"
          :text="'fa-bars' | fonticon"
        />
        <Label class="h1" text="IDentiBite" textAlignment="center"></Label>
        <Image :src="'logo.png' | imageAssetPath" width="200" id="logo" />

        <ImageButton
          icon="fa-search"
          label="Identify"
          @tap="$goto('identify')"
          class="btn-primary"
        />
        <ImageButton icon="fa-bug" label="Explore" @tap="$goto('explore')" />
        <ImageButton
          icon="fa-heartbeat"
          label="Treatment"
          @tap="$goto('treatment')"
        />
      </StackLayout>
    </ScrollView>
  </Page>
</template>


<script >
import ImageButton from "../components/ImageButton";

export default {
  components: {
    ImageButton
  }
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";

#home {
  button.icon-red {
    margin-right: $page-margin;
  }

  label.h1 {
    color: $red;
    margin-top: 40;
    margin-bottom: 20;
  }

  #logo {
    margin-bottom: 50;
  }

  .btn {
    margin: 10;
    width: 220;
    .icon {
      font-size: 28;
      padding-left: 10;
    }
    .label {
      padding-left: 20;
      text-align: center;
      padding-right: 60;
      font-size: $font-size-medium;
    }
  }
}
</style>

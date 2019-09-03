<template>
  <Page class="page" actionBarHidden="true">
    <Header page-title="Home" />
    <ScrollView>
      <StackLayout width="100%">
        <Button
          class="fa page-icon page-icon-red pull-right"
          @tap="onDrawerButtonTap()"
          text.decode="&#xf0c9;"
          width="30"
        />
        <Label class="h1" text="IDentiBite" textAlignment="center"></Label>
        <Image :src="'logo.png' | imageAssetPath" width="160" id="logo" />

        <GridLayout
          columns="auto, *"
          @tap="$goto('identify')"
          class="btn btn-primary"
        >
          <Label col="0" text.decode="&#xf002;" class="fa"></Label>
          <Label col="1" text="Identify" class="label"></Label>
        </GridLayout>

        <GridLayout columns="auto, *" @tap="$goto('explore')" class="btn">
          <Label col="0" text.decode="&#xf188;" class="fa"></Label>
          <Label col="1" text="Explore" class="label"></Label>
        </GridLayout>

        <GridLayout columns="auto, *" @tap="$goto('treatment')" class="btn">
          <Label col="0" text.decode="&#xf21e;" class="fa"></Label>
          <Label col="1" text="Treatment" class="label" textWrap="true"></Label>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import * as utils from "~/shared/utils";

export default {
  mounted() {
    this.$updateSelectedPage("home");
  },
  methods: {
    onDrawerButtonTap() {
      utils.showDrawer();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../app-variables";

.page-icon-red {
  font-size: 26;
  padding: 0;
  margin: 0;
  margin-right: $page-margin;
}

label.h1 {
  color: $red;
  margin-top: 20;
  margin-bottom: 40;
}

#logo {
  margin-bottom: 50;
}

.btn {
  margin: 10;
  width: 220;
  .fa {
    font-size: 28;
    padding-left: 10;
  }
  .label {
    padding-left: 10;
    text-align: center;
    padding-right: 40;
    font-size: $font-size-medium;
  }
}
</style>
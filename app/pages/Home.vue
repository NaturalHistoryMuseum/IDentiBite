<template>
  <Page class="page" actionBarHidden="true">
    <Header page-title="Home" />
    <ScrollView>
      <GridLayout rows="*, 80">
        <StackLayout width="100%" row="0">
          <GridLayout columns="auto, *">
            <Label text="beta" id="beta" />
            <Button
              class="fa page-icon page-icon-red pull-right"
              @tap="onDrawerButtonTap()"
              text.decode="&#xf0c9;"
              width="30"
              col="1"
            />
          </GridLayout>

          <Label class="h1" text="IDentiBite" textAlignment="center"></Label>
          <Image src="res://logo" width="160" height="160" id="logo" />

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
            <Label
              col="1"
              text="Treatment"
              class="label"
              textWrap="true"
            ></Label>
          </GridLayout>
        </StackLayout>
        <StackLayout
          row="1"
          horizontalAlignment="center"
          verticalAlignment="bottom"
        >
          <Anchor href="https://www.nhm.ac.uk/">
            <Image col="0" src="res://nhm" id="nhm" height="40" />
          </Anchor>
        </StackLayout>
      </GridLayout>
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
  margin-top: 10;
  margin-bottom: 30;
}

#beta {
  background: $medium-grey;
  color: $white;
  padding: 1 10;
  text-align: center;
  margin-left: $page-margin;
  text-transform: uppercase;
  height: 22;
  vertical-align: middle;
}

#logo {
  margin-bottom: 40;
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
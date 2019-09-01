<template>
  <Page actionBarHidden="true" class="page">
    <RadSideDrawer ref="drawer" @drawerOpening="onDrawerOpened">
      <StackLayout ~drawerContent class="sidedrawer-left">
        <Label class="sidedrawer-header" text="IDentiBite"></Label>

        <ImageButton
          class="sidedrawer-list-item btn-transparent"
          icon="fa-home"
          label="Home"
          :class="{ 'sidedrawer-list-item-active': buttonIsActive('home') }"
          @tap="buttonTap('home')"
        />
        <ImageButton
          icon="fa-search"
          label="Identify"
          class="sidedrawer-list-item btn-transparent"
          :class="{ 'sidedrawer-list-item-active': buttonIsActive('identify') }"
          @tap="buttonTap('identify')"
        />
        <ImageButton
          icon="fa-bug"
          label="Explore"
          :class="{ 'sidedrawer-list-item-active': buttonIsActive('explore') }"
          @tap="buttonTap('explore')"
          class="sidedrawer-list-item btn-transparent"
        />
        <ImageButton
          icon="fa-heartbeat"
          label="Treatment"
          :class="{
            'sidedrawer-list-item-active': buttonIsActive('treatment')
          }"
          @tap="buttonTap('treatment')"
          class="sidedrawer-list-item btn-transparent"
        />
        <StackLayout class="hr-light m-t-15"></StackLayout>
        <ImageButton
          icon="fa-info-circle"
          label="About"
          :class="{ 'sidedrawer-list-item-active': buttonIsActive('about') }"
          @tap="buttonTap('about')"
          class="sidedrawer-list-item btn-transparent"
        />
      </StackLayout>
      <Frame ~mainContent id="mainContent">
        <HomePage />
      </Frame>
    </RadSideDrawer>
  </Page>
</template>

<script >
import Vue from "nativescript-vue";

import ImageButton from "../components/ImageButton";
import HomePage from "~/pages/Home";

export default {
  data: function() {
    return {
      activeButton: null
    };
  },
  components: { HomePage, ImageButton },
  mounted() {
    Vue.prototype.drawer = this.$refs.drawer.nativeView;
  },
  methods: {
    buttonTap(name) {
      this.activeButton = name;
      this.$goto(name);
    },
    buttonIsActive(name) {
      return this.activeButton == name;
    },
    onDrawerOpened() {
      this.activeButton = null;
    }
  }
};
</script>
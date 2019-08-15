import Vue from "nativescript-vue";

Vue.filter('imageAssetPath', function (value) {
    return `~/assets/images/${value}`;
});
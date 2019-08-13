<template>
  <ActionBar>
    <GridLayout width="100%" columns="auto, *">
      <Label class="fa" @tap="$showDrawer()" :text="'fa-bars' | fonticon" />
      <Label class="title" :text="pageTitle" col="1" />
    </GridLayout>
  </ActionBar>
</template>

<script >
export default {
  props: ["pageTitle"]
};
</script>
<template>
  <ActionBar>
    <GridLayout width="100%" columns="*, 80">
      <Label col="0" class="title" :text="pageTitle" />
      <Label col="1" class="fa" @tap="$showDrawer()" :text="'fa-bars' | fonticon" />
    </GridLayout>
  </ActionBar>
</template>

<script >
export default {
  props: ["pageTitle"]
};
</script>
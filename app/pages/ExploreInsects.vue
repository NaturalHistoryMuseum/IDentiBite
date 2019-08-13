


<template>
  <Page>
    <Header page-title="Explore insects" />
    <ScrollView>
      <StackLayout>
        <Label text="this" />
        <Label text="text" />
        <Label text="scrolls" />
        <Label text="horizontally" />
        <Label text="if necessary" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>


<script >
import Header from "../components/Header";

export default {
  components: { Header },
  computed: {
    groups() {
      return this.$store.getters.getGroups;
    }
  },
  methods: {
    onItemTap() {
      //   frameModule.topmost().goBack();
    }
  }
};
</script>


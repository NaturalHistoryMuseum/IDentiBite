

<template>
  <Page>
    <Header page-title="Insect ID" />
    <StackLayout orientation="Vertical">
      <Button text="Back to Master" @tap="$navigateBack" />
    </StackLayout>
  </Page>
</template>


<script >
import Header from "../components/Header";

export default {
  components: { Header }
};
</script>


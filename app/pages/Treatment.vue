<template>
  <Page class="page">
    <Header page-title="Treatment" />
    <StackLayout>
      <SubHeader />
      <GridLayout>
        <ListView for="treatment in treatmentList" @itemTap="onTreatmentTap">
          <v-template>
            <ListItem
              :file-name="treatment['image']['file']"
              :title="treatment.short_title"
              :subtitle="treatment.title"
            />
          </v-template>
        </ListView>
      </GridLayout>
    </StackLayout>
  </Page>
</template>


<script>
import ListItem from "../components/ListItem";

export default {
  computed: {
    treatmentList() {
      return this.$store.getters.getTreatments;
    }
  },
  components: {
    ListItem
  },
  methods: {
    onTreatmentTap(event) {
      this.$goto("treatmentDetail", {
        props: {
          id: event.item.id
        }
      });
    }
  },
  mounted() {
    // this.$updateSelectedPage("treatment");
  }
};
</script>




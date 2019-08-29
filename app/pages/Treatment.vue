<template>
  <Page>
    <Header page-title="Treatment" />
    <StackLayout>
      <SubHeader />
      <GridLayout>
        <ListView
          for="treatment in treatmentList"
          @itemTap="onTreatmentTap"
          separatorColor="#f1eff0"
        >
          <v-template>
            <ListItem
              :file-name="treatment['image']['file']"
              :title="treatment.title"
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
  }
};
</script>




]<template>
  <Page class="page">
    <Header :page-title="treatment.short_title" />
    <StackLayout>
      <SubHeader>
        <Label :text="treatment.title" />
      </SubHeader>
      <ScrollView>
        <StackLayout>
          <Image
            col="0"
            :src="treatment['image']['file'] | imageAssetPath"
            @tap="onImageTap"
            class="page-margins"
          />
          <Label
            :text="text"
            v-for="text in treatment.text"
            v-bind:key="text"
            textWrap="true"
            :class="isTitle(text) ? 'h2' : 'body'"
          />
          <Warning :text="treatment.warning" />
          <TreatmentReferences />
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>



<script>
import Warning from "../components/Warning";
import TreatmentReferences from "../components/TreatmentReferences";

export default {
  props: ["id"],
  components: {
    Warning,
    TreatmentReferences
  },
  computed: {
    treatment() {
      return this.$store.getters.getTreatmentByID(this.id);
    }
  },
  methods: {
    showModalImage(title, image) {
      this.$goto("modal", {
        props: {
          title: title,
          image: image
        }
      });
    },
    isTitle(text) {
      return text.split(" ").length == 1;
    },
    onImageTap() {
      this.$goto("modal", {
        props: {
          title: this.treatment.title,
          image: this.treatment.image
        }
      });
    }
  },
  mounted() {
    this.$updateSelectedPage("treatment");
  }
};
</script>



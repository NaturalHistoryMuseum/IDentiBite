]<template>
  <Page>
    <Header :page-title="treatment.short_title" />
    <StackLayout>
      <SubHeader>
        <Label :text="treatment.title" height="20" />
      </SubHeader>
      <ScrollView>
        <StackLayout>
          <Image
            col="0"
            :src="treatment['image']['file'] | imageAssetPath"
            @tap="showModalImage(treatment.title, treatment.image)"
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
import ModalImage from "../components/ModalImage";

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
      this.$showModal(ModalImage, {
        props: {
          title: title,
          image: image
        },
        fullscreen: true,
        animated: false,
        stretched: false,
        dimAmount: 0.5
      });
    },
    isTitle(text) {
      return text.split(" ").length == 1;
    }
  }
};
</script>



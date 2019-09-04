<template>
  <Page class="page">
    <Header :page-title="species.common_name" />
    <StackLayout>
      <SubHeader>
        <GridLayout
          columns="auto, auto, auto, auto"
          height="30"
          class="species-genus vertical-align"
        >
          <Label col="0">
            <FormattedString>
              <Span text="Genus:" fontWeight="Bold" />
            </FormattedString>
          </Label>
          <Label
            col="1"
            :text="species.genus"
            marginLeft="2"
            marginRight="10"
          />
          <Label col="2">
            <FormattedString>
              <Span text="Species:" fontWeight="Bold" />
            </FormattedString>
          </Label>
          <Label col="3" :text="species.species" marginLeft="2" />
        </GridLayout>
      </SubHeader>

      <ScrollView>
        <StackLayout>
          <ScrollView orientation="horizontal">
            <StackLayout
              orientation="horizontal"
              class="image-horizontal-scroll"
            >
              <Image
                :src="image.file | imageAssetPath"
                v-for="(image, index) in species.images"
                v-bind:key="image.file"
                @tap="showModalImage(species.common_name, image)"
                height="240"
                :class="{ 'image-first': index === 0 }"
              />
            </StackLayout>
          </ScrollView>
          <Label
            :text="description"
            v-for="description in species.description"
            v-bind:key="description"
            textWrap="true"
            class="body"
          />
          <Label text="Bites and stings" class="h2" />
          <Warning :text="species.warning" />
          <Label
            :text="bites"
            v-for="bites in species.bites_stings"
            v-bind:key="bites"
            textWrap="true"
            class="body"
          />
          <Label text="Resources" class="h2" />
          <Label
            :text="resource"
            v-for="resource in species.resources"
            v-bind:key="resource"
            textWrap="true"
            class="body"
          />
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </Page>
</template>


<script>
import Warning from "../components/Warning";

export default {
  props: ["id"],
  components: {
    Warning
  },
  computed: {
    species() {
      return this.$store.getters.getSpeciesByID(this.id);
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
    }
  },
  mounted() {
    this.$updateSelectedPage("explore");
  }
};
</script>

<style scoped lang="scss">
.species-genus {
  label {
    vertical-align: middle;
  }
}
</style>

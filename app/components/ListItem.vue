<template>
  <GridLayout columns="120, *">
    <Image
      height="85"
      width="120"
      col="0"
      :src="fileName | imageAssetPath"
      stretch="aspectFill"
    />
    <StackLayout col="1" verticalAlignment="middle" height="85">
      <Label :text="title" />
      <Label class="subtitle" v-if="subtitle">
        <FormattedString>
          <Span :text="subtitle" fontAttributes="Italic" />
        </FormattedString>
      </Label>
    </StackLayout>
  </GridLayout>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String
    },
    title: {
      type: String
    },
    subtitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

label {
  padding-left: 30px;
}
image {
  border-color: $white;
}

StackLayout {
  border-color: $light-grey;
}

StackLayout,
image {
  border-bottom-width: 1;
}

.subtitle {
  font-style: italic;
  color: $softer-dark-grey;
}
</style>

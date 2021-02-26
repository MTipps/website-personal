<template>
  <div class="section-heading">
    <p class="section-heading__header">
      {{ header }}
    </p>
    <p class="section-heading__sub-header">
      {{ subHeader }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    header: {
      type: String,
      required: true
    },
    subHeader: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.section-heading {
  @include flexbox;
  @include flex-direction(column);
  @include flex-align-items(center);
  padding: bu(40) bu(60);

  &__header {
    @include font(map-get($fonts, 'pt-sans-narrow'), bu(36), bu(47), bold, map-get($colours, 'colour-tulip-tree'));
    text-transform: uppercase;
  }

  &__sub-header {
    @include font(map-get($fonts, 'pt-sans'), bu(18), bu(23), normal, map-get($colours, 'colour-slate-gray'));
    margin-top: bu(10);
    text-align: center;
  }
}
</style>

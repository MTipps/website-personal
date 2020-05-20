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
  padding: bu(40) bu(20);

  &__header {
    @include font(map-get($fonts, 'roboto'), bu(20), map-get($colours, 'primary-colour'), bold, bu(30));

    @include breakpoint(tablet) {
      @include font(map-get($fonts, 'roboto'), bu(30), map-get($colours, 'primary-colour'), bold, bu(30));
    }
  }

  &__sub-header {
    @include font(map-get($fonts, 'montserrat'), bu(13), map-get($colours, 'primary-colour'), normal, bu(20));
    margin-top: bu(10);
    text-align: center;

    @include breakpoint(tablet) {
      @include font(map-get($fonts, 'montserrat'), bu(15), map-get($colours, 'primary-colour'), normal, bu(20));
    }
  }
}
</style>

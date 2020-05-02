<template>
  <nuxt-link to="/" class="navigation-my-info">
    <img :src="myLogo" alt="Black and White photo of Megan Tipps as a logo" class="navigation-my-info__logo-img">

    <div class="navigation-my-info__info-me">
      <p class="info-me-text">
        {{ myName }}
      </p>
      <p class="info-me-text">
        {{ myTitle }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationMyInfo',
  props: {
    myLogo: {
      type: String,
      required: true
    },
    myName: {
      type: String,
      required: true
    },
    myTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-my-info {
    @include flexbox;
    @include flex-align-items(center);
    text-decoration: none;

    &__logo-img {
      @include circle(bu(100), map-get($colours, 'bismark-blue'));
      margin-right: bu(20);

      @include breakpoint(max-width, 1024px) {
        @include circle(bu(80), map-get($colours, 'bismark-blue'));
      }
    }

    &__info-me {
      @include font(map-get($fonts, 'montserrat'), bu(20), map-get($colours, 'hoki-blue'), normal, bu(16));

      @include breakpoint(max-width, 1024px) {
        @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'hoki-blue'), normal, bu(16));
      }
    }

    &__info-me .info-me-text:first-of-type {
      margin-bottom: bu(10);
    }
  }
</style>

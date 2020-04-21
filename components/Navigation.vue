<template>
  <nav class="navigation">
    <nuxt-link to="/" class="navigation__left">
      <img :src="logo" alt="" class="navigation__logo rounded-full h-16 w-16 bg-gray-400">

      <div class="info-me pl-4">
        <p class="font-sans text-2xl text-white">
          {{ myName }}
        </p>
        <p class="font-sans text-base text-white">
          {{ myTitle }}
        </p>
      </div>
    </nuxt-link>

    <div class="navigation__right">
      <ul class="flex flex-col lg:flex-row">
        <li v-for="link in navigationLinks" :key="link.linkName">
          <a :href="link.linkRef" class="font-sans text-base text-white hover:text-pink-600 lg:pl-6">{{ link.linkName }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapState('navigation', [
      'myName',
      'myTitle',
      'logo',
      'navigationLinks'
    ])
  }
}
</script>

<style lang="scss">
  .navigation {
    @include flexbox;
    @include flex-align-items(center);
    @include flex-justify-content(space-between);
    @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'black'), normal, bu(16));

    background-image: linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%);

      &__left {
        @include flexbox;
        @include flex-align-items(center);
      }

      &__logo {
        /* TODO: Update background color for circle */
        @include circle(bu(100), red);
      }
  }
</style>

<template>
  <nav class="navigation flex items-center justify-between flex-wrap p-6 bg-purple-900 shadow-lg">
    <nuxt-link to="/" class="navigation__left flex items-center mr-10 mb-6 lg:mb-0 w-full lg:w-auto">
      <img :src="logo" alt="" class="rounded-full h-16 w-16 bg-gray-400">
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
          <a :href="link.LinkRef" class="font-sans text-base text-white hover:text-pink-600 lg:pl-6">{{ link.linkName }}</a>
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
  },
  mounted () {
    this.$store.dispatch('navigation/getNavigationItems')
  }
}
</script>

<style lang="scss" scoped>
</style>

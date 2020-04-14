<template>
  <footer class="bg-purple-900 p-6 mt-6 text-center">
    <div class="mb-6">
      <font-awesome-icon :icon="['fab', 'linkedin']" />
      <p
        v-for="phrase in catchphrase"
        :key="phrase.text"
        class="font-sans font-bold text-xl text-white"
      >
        {{ phrase.text }}
      </p>
    </div>
    <div class="flex justify-center mb-6">
      <a
        v-for="social in socialMedia"
        :key="social.linkRef"
        :href="social.linkRef"
        class="pr-6"
        target="_blank"
      >
        <app-icon :icon-name="social.linkIcon" icon-class="fill-current text-white hover:text-pink-600 inline-block h-8 w-8" class="h-8 w-8" />
      </a>
    </div>
    <div>
      <p class="font-sans text-base text-white">
        {{ createdByText }} &#169; {{ new Date().getFullYear() }}
      </p>
      <p
        v-for="phrase in createdWith"
        :key="phrase.text"
        v-html="phrase.text"
        class="font-sans text-base text-white"
      />
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
import Icon from './Icon'

export default {
  name: 'Footer',
  components: {
    appIcon: Icon
  },
  computed: {
    ...mapState('footer', [
      'catchphrase',
      'socialMedia',
      'createdByText',
      'createdWith'
    ])
  },
  mounted () {
    this.$store.dispatch('footer/getFooterItems')
  }
}
</script>

<style scoped>

</style>

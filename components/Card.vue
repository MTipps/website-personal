<template>
  <div class="rounded-lg shadow-lg max-w-sm mr-0 sm:mr-10 mb-6">
    <div class="flex justify-center">
      <img :src="image" alt="" class="rounded-t-lg object-cover object-center h-48">
    </div>
    <div class="p-6">
      <p class="font-sans font-bold text-lg text-pink-600 pb-6">
        {{ title }}
      </p>
      <p class="h-40 font-sans text-base text-gray-800 pb-6">
        {{ description }}
      </p>
      <div class="tech-stack flex flex-wrap justify-center">
        <div v-for="(tech) in techUsed" :key="tech.techName" class="pr-6 pt-6">
          <app-icon :icon-name="tech.techIcon[0]" class="h-12 w-12" />
        </div>
      </div>
      <a v-if="openNewTab" :href="link" class="block w-full font-sans font-bold text-md text-white bg-pink-600 hover:bg-purple-600 py-4 mt-6 rounded-lg" target="_blank">
        {{ linkText }}
      </a>
      <nuxt-link v-else :to="link" class="block w-full font-sans font-bold text-md text-white bg-pink-600 hover:bg-purple-600 py-4 mt-6 rounded-lg">
        {{ linkText }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  name: 'Card',
  components: {
    appIcon: Icon
  },
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    techUsed: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      required: true
    },
    openNewTab: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.tech-stack {
  min-height: 5rem;
}
</style>

<template>
  <div class="rounded-lg shadow-lg max-w-sm mr-0 sm:mr-10 mb-6">
    <img :src="image" alt="" class="rounded-t-lg object-cover h-48">
    <div class="p-6">
      <p class="font-sans font-bold text-lg text-pink-600 pb-6">
        {{ title }}
      </p>
      <p class="font-sans text-base text-gray-800 pb-6">
        {{ description }}
      </p>
      <div class="tech-stack flex flex-wrap justify-center">
        <div v-for="tech in getTechStackIcons(techUsed)" :key="tech.techName" v-html="tech.techIcon" class="pr-6 pt-6" />
      </div>
      <a :href="link" class="block w-full font-sans font-bold text-md text-white bg-pink-600 hover:bg-purple-600 py-4 mt-6 rounded-lg">{{ linkText }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
    }
  },
  data () {
    return {
      techStack: this.$store.state.techStackData.techStack
    }
  },
  methods: {
    getTechStackIcons (iconsToGetArray) {
      const iconsArray = []

      this.techStack.forEach(function (tech) {
        iconsToGetArray.forEach(function (iconName) {
          if (iconName === tech.techName) {
            iconsArray.push(tech)
          }
        })
      })

      return iconsArray
    }
  }
}
</script>

<style scoped>
.tech-stack {
  min-height: 4rem;
}
</style>

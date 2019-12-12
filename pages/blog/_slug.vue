<template>
  <div class="my-6 mx-6 lg:mx-16">
    <p class="font-sans font-bold text-4xl text-pink-600 text-center">
      {{ post.attributes.title }}
    </p>
    <p class="font-sans text-lg pt-6">
      Date posted: {{ $moment(post.attributes.date).format('d/MM/YYYY') }}
    </p>
    <div v-show="post.attributes.techUsed.length > 0">
      <p class="font-sans text-lg pt-6">
        Tech Used:
      </p>
      <div class="tech-stack flex flex-wrap">
        <div v-for="tech in getTechStackIcons(post.attributes.techUsed)" :key="tech.techName" v-html="tech.techIcon" class="pr-6 pt-6" />
      </div>
    </div>
    <div v-html="post.html" class="pt-6" />
  </div>
</template>

<script>
export default {
  name: 'Slug',
  data () {
    return {
      techStack: this.$store.state.techStackData.techStack
    }
  },
  async asyncData ({ params }) {
    try {
      const post = await import(`~/blog-content/${params.slug}.md`)
      return {
        post
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err)
      return false
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

</style>

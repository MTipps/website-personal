<template>
  <div class="my-6 mx-6 lg:mx-16">
    <p class="font-sans font-bold text-4xl text-pink-600 text-center">{{ post.attributes.title }}</p>
    <p class="font-sans text-lg pt-6">Date posted: {{ $moment(post.attributes.date).format('d/MM/YYYY') }}</p>
    <div v-show="post.attributes.techUsed.length > 0">
      <p class="font-sans text-lg pt-6">Tech Used:</p>
      <div class="tech-stack flex flex-wrap">
        <div v-for="tech in getTechStackIcons(post.attributes.techUsed)" :key="tech.techName" v-html="tech.techIcon" class="pr-6 pt-6" />
      </div>
    </div>
    <div class="pt-6" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData ({ params }) {
    try {
      const post = await import(`~/blog-content/${params.slug}.md`)
      // eslint-disable-next-line no-console
      console.log(post)
      return {
        post
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err)
      return false
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

      console.log(iconsToGetArray)

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

<template>
  <div id="blog" class="pt-6 text-center">
    <app-sectionheading :header="header" :sub-header="subHeader" />
    <div class="flex flex-wrap justify-center pt-6">
      <app-card
        v-for="blogPost in blogPosts"
        :key="blogPost.attributes.title"
        :image="blogPost.attributes.image"
        :title="blogPost.attributes.title"
        :description="blogPost.attributes.intro"
        :tech-used="blogPost.attributes.techUsed"
        :link="addBlogInUrl(blogPost.attributes.slug)"
        :open-new-tab="false"
        link-text="Read Post"
      />
    </div>
  </div>
</template>

<script>
import SectionHeading from './ui/SectionHeading'
import Card from './Card'

export default {
  name: 'Blog',
  components: {
    appSectionheading: SectionHeading,
    appCard: Card
  },
  props: {
    blogPosts: {
      type: Array,
      required: true
    },
    isBlogInUrl: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      header: 'From My Blog',
      subHeader: 'A few bits and bobs from my own mind:'
    }
  },
  methods: {
    addBlogInUrl (slugName) {
      return this.isBlogInUrl ? 'blog/' + slugName : slugName
    }
  }
}
</script>

<style scoped>

</style>

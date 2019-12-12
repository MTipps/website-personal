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
        :link="'blog/' + blogPost.attributes.slug"
        link-text="Read Post"
        :open-new-tab="false"
      />
    </div>
  </div>
</template>

<script>
import SectionHeading from './SectionHeading'
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
    }
  },
  data () {
    return {
      header: 'From My Blog',
      subHeader: 'A few bits and bobs from my own mind:'
    }
  }
}
</script>

<style scoped>

</style>

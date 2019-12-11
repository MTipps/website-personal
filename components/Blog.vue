<template>
  <div id="blog" class="pt-6 text-center">
    <app-sectionheading :header="header" :sub-header="subHeader" />
    <div class="flex flex-wrap justify-center pt-6">
      <app-card
        v-for="blogPost in blogPosts"
        :key="blogPost.title"
        :image="blogPost.image"
        :title="blogPost.title"
        :description="blogPost.description"
        :tech-used="blogPost.techUsed"
        :link="blogPost.link"
        link-text="Read More"
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
  data () {
    return {
      header: 'From My Blog',
      subHeader: 'A few bits and bobs from my own mind:',
      blogPosts: [
        {
          image: 'https://via.placeholder.com/728x90',
          title: 'What a Post',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum felis dui, congue mollis massa fermentum eget. Etiam sed suscipit sapien. Integer imperdiet odio eget arcu condimentum, sed viverra',
          techUsed: [ 'HTML', 'CSS', 'Javascript', 'Typescript' ],
          link: 'Link to Site'
        },
        {
          image: 'https://via.placeholder.com/728x90',
          title: 'Can this get better?',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum felis dui, congue mollis massa fermentum eget. Etiam sed suscipit sapien. Integer imperdiet odio eget arcu condimentum, sed viverra',
          techUsed: [],
          link: 'Link to Site'
        },
        {
          image: 'https://via.placeholder.com/728x90',
          title: 'It sure can!',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum felis dui, congue mollis massa fermentum eget. Etiam sed suscipit sapien. Integer imperdiet odio eget arcu condimentum, sed viverra',
          techUsed: [],
          link: 'Link to Site'
        },
        {
          image: 'https://via.placeholder.com/728x90',
          title: 'Much wow, too much awesomeness',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum felis dui, congue mollis massa fermentum eget. Etiam sed suscipit sapien. Integer imperdiet odio eget arcu condimentum, sed viverra',
          techUsed: [ 'HTML', 'CSS', 'Javascript', 'Typescript' ],
          link: 'Link to Site'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

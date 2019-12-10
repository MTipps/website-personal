<template>
  <div class="pt-6 text-center">
    <app-section-heading :header="header" :sub-header="subHeader" />
    <div class="flex flex-wrap justify-center">
      <app-card
        v-for="recentWork in recentWorks"
        :key="recentWork.title"
        :image="recentWork.image"
        :title="recentWork.title"
        :description="recentWork.description"
        :tech-used="recentWork.techUsed"
        :link="recentWork.link"
      />
    </div>
  </div>
</template>

<script>
import SectionHeading from './SectionHeading'
import Card from './Card'

export default {
  name: 'RecentWork',
  components: {
    appSectionHeading: SectionHeading,
    appCard: Card
  },
  data () {
    return {
      header: 'Recent Work',
      subHeader: 'Here are a view things that I have done:',
      recentWorks: [
        {
          image: 'logo',
          title: 'company name',
          description: 'description',
          techUsed: 'list of tech used',
          link: 'Link to Site'
        },
        {
          image: 'logo1',
          title: 'company name1',
          description: 'description1',
          techUsed: 'list of tech used1',
          link: 'Link to Site1'
        },
        {
          image: 'logo2',
          title: 'company name2',
          description: 'description2',
          techUsed: 'list of tech used2',
          link: 'Link to Site2'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

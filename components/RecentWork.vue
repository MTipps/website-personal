<template>
  <div id="recent-work" class="pt-6 text-center">
    <app-section-heading :header="header" :sub-header="subHeader" />
    <div class="flex flex-wrap justify-center pt-6">
      <app-card
        v-for="recentWork in recentWorks"
        :key="recentWork.title"
        :image="recentWork.image"
        :title="recentWork.title"
        :description="recentWork.description"
        :tech-used="recentWork.techUsed"
        :link="recentWork.link"
        link-text="Visit Site"
        :open-new-tab="true"
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
      subHeader: 'Here are a few things that I have done:',
      recentWorks: this.$store.state.recentWorkData.recentWorks
    }
  }
}
</script>

<style scoped>

</style>

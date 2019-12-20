<template>
  <div id="recent-work" class="pt-6 text-center">
    <app-section-heading :header="recentWorkHeader" :sub-header="recentWorkSubHeader" />
    <div class="flex flex-wrap justify-center pt-6">
      <app-card
        v-for="recentWork in recentWorks"
        :key="recentWork.title"
        :image="recentWork.image"
        :title="recentWork.title"
        :description="recentWork.description"
        :tech-used="recentWork.techUsed"
        :link="recentWork.link"
        :open-new-tab="true"
        link-text="Visit Site"
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
  props: {
    recentWorkHeader: {
      type: String,
      required: true
    },
    recentWorkSubHeader: {
      type: String,
      required: true
    },
    recentWorks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

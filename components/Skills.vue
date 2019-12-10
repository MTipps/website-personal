<template>
  <div class="pt-6 text-center">
    <app-section-heading :header="header" :sub-header="subHeader" />
    <div class="pt-6 flex flex-wrap justify-center">
      <div v-for="tech in techStack" :key="tech.techName" v-show="tech.techIcon !== ''" class="flex justify-start items-center pb-6 pr-10">
        <div v-html="tech.techIcon" />
        <app-progress-bar :progress-inner-width="tech.techProgress" class="pl-6" />
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from './SectionHeading'
import Progressbar from './Progressbar'

export default {
  name: 'Skills',
  components: {
    appSectionHeading: SectionHeading,
    appProgressBar: Progressbar
  },
  data () {
    return {
      header: 'What can I do?',
      subHeader: 'Learning new languages and frameworks is what keeps me going. Here are a list of my current skills:',
      techStack: this.$store.state.techStackData.techStack
    }
  }
}
</script>

<style scoped>

</style>

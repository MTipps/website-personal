<template>
  <div class="pt-6 text-center">
    <app-section-heading :header="header" :sub-header="subHeader" />
    <div class="pt-6 flex flex-wrap justify-center">
      <div v-for="tech in techStack" :key="tech.techName" v-show="tech.techIcon !== ''">
        <div class="items-center rounded-lg shadow-lg w-full max-w-xs mr-0 sm:mr-10 mb-6 p-6">
          <div>
            <div v-html="tech.techIcon" />
            <p class="font-sans font-bold text-lg text-pink-600">
              {{ tech.techName }}
            </p>
          </div><div class="flex mt-6">
            <p class="font-sans text-base text-gray-800">Skill Level:</p>
            <app-progress-bar :progress-inner-width="tech.techProgress" class="pl-6" />
          </div>
        </div>
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

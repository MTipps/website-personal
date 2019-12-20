<!--TODO: Add Icons to SVG System -->

<template>
  <div id="skills" class="pt-6 text-center">
    <app-section-heading :header="techStackHeader" :sub-header="techStackSubHeader" />
    <div class="pt-6 flex flex-wrap justify-center">
      <div v-for="tech in techStack" :key="tech.techName" v-show="tech.techIcon !== ''">
        <div class="items-center rounded-lg shadow-lg w-full max-w-xs mr-0 sm:mr-10 mb-6 p-6">
          <div class="flex flex-col items-center">
            <!--            <div v-html="tech.techIcon" class="h-12 w-12" />-->
            <p class="font-sans font-bold text-lg text-pink-600">
              {{ tech.techName }}
            </p>
          </div><div class="flex mt-6">
            <p class="font-sans text-base text-gray-800">
              Skill Level:
            </p>
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
  props: {
    techStackHeader: {
      type: String,
      required: true
    },
    techStackSubHeader: {
      type: String,
      required: true
    },
    techStack: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>

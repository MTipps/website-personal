<template>
  <section id="skills" class="skills">
    <app-section-heading :header="techStackHeading.heading" :sub-header="techStackHeading.subHeading" />
    <!--<div class="pt-6 flex flex-wrap justify-center">
      <div v-for="tech in techStack" :key="tech.techName" v-show="tech.techIcon !== ''">
        <div class="items-center rounded-lg shadow-lg w-full max-w-xs mr-0 sm:mr-10 mb-6 p-6">
          <div class="flex flex-col items-center">
            <app-icon :icon-name="tech.techIcon[0]" icon-class="fill-current text-gray-800 hover:text-purple-800 inline-block h-12 w-12" class="h-12 w-12" />
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
    </div>-->
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SectionHeading from '../ui/SectionHeading'
// import Progressbar from './Progressbar'
// import Icon from './Icon'

export default {
  name: 'Skills',
  components: {
    appSectionHeading: SectionHeading
    // appProgressBar: Progressbar,
    // appIcon: Icon
  },
  computed: {
    ...mapState('techStack', [
      'techStackHeading'
    ])
  }
}
</script>

<style scoped>
</style>

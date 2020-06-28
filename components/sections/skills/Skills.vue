<template>
  <section id="skills" class="skills">
    <app-section-heading
      :header="techStackHeading.heading"
      :sub-header="techStackHeading.subHeading"
    />

    <div class="skills__card-container">
      <app-card-skill
        v-for="tech in techStackItems"
        :key="tech.techName"
        :skill-title="tech.techName"
        :skill-info="tech.techInfo"
        :skill-link="tech.techLink"
        :skill-progress="tech.techProgress"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SectionHeading from '../../ui/SectionHeading'
// import Progressbar from './Progressbar'
// import Icon from './Icon'
import CardSkill from './CardSkill'

export default {
  name: 'Skills',
  components: {
    appSectionHeading: SectionHeading,
    appCardSkill: CardSkill
    // appProgressBar: Progressbar,
    // appIcon: Icon
  },
  computed: {
    ...mapState('techStack', [
      'techStackHeading',
      'techStackItems'
    ])
  }
}
</script>

<style lang="scss" scoped>
  // TODO: Update with correct mixins
  .skills {
    padding-left: 150px;
    padding-right: 150px;

    .skills__card-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>

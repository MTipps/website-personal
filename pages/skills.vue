<template>
  <section id="skills" class="skills">
    <app-section-heading
      :header="techStackHeading.heading"
      :sub-header="techStackHeading.subHeading"
    />

    <div class="skills__cards">
      <app-skill-card
        v-for="techStackItem in techStackItems"
        :skill-title="techStackItem.techName"
        :skill-info="techStackItem.techInfo"
        :skill-link="techStackItem.techLink"
        :skill-progress="techStackItem.techProgress"
        :skill-icon="techStackItem.fontAwesome"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import SectionHeading from '~/components/ui/SectionHeading'
import SkillCard from '~/components/ui/SkillCard'

export default {
  name: 'skills',
  components: {
    appSectionHeading: SectionHeading,
    appSkillCard: SkillCard
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
  .skills {
    &__cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

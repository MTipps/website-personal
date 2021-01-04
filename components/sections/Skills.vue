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
  name: 'Skills',
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
    @include flexbox;
    @include flex-justify-content(center);
    @include flex-align-items(center);
    @include flex-wrap(wrap);
    padding: 0 bu(60);

    @include breakpoint(tablet) {
      padding: 0 bu(60);
    }
  }
}
</style>

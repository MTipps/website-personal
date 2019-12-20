<!-- TODO: About me section, add to Contentful -->
<!-- TODO: Check out Tailwind CSS lazy loading and implement -->
<!-- TODO: Implement for Contentful when you are in draft mode that it should show in dev but not prod. -->
<!-- TODO: Fix tests -->
<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me :about-me-text="aboutMeText" />
    <app-skills :tech-stack="techStack" :tech-stack-header="techStackHeader" :tech-stack-sub-header="techStackSubHeader" />
    <app-recent-work :recent-works="recentWork" :recent-work-header="recentWorkHeader" :recent-work-sub-header="recentWorkSubHeader" />
    <!--    <app-blog v-show="false" :blog-posts="[]" :is-blog-in-url="true" />-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import RecentWork from '../components/RecentWork'

export default {
  components: {
    appAboutMe: AboutMe,
    appSkills: Skills,
    appRecentWork: RecentWork
  },
  computed: {
    ...mapState('homepage', [
      'aboutMeText',
      'techStackHeader',
      'techStackSubHeader',
      'techStack',
      'recentWorkHeader',
      'recentWorkSubHeader',
      'recentWork'
    ])
  },
  mounted () {
    this.$store.dispatch('homepage/getPageItems')
  }
}
</script>

<style>
</style>

<!-- TODO: Remove Tailwind stuff -->
<!-- TODO: Fix tests -->
<!-- TODO: Add Blog! -->
<template>
  <div>
    <app-about-me />
<!--    <app-skills :tech-stack="techStack" :tech-stack-header="techStackHeader" :tech-stack-sub-header="techStackSubHeader" />-->
<!--    <app-recent-work :recent-works="recentWork" :recent-work-header="recentWorkHeader" :recent-work-sub-header="recentWorkSubHeader" />-->
    <!--    <app-blog v-show="false" :blog-posts="[]" :is-blog-in-url="true" />-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AboutMe from '../components/AboutMe'
// import Skills from '../components/Skills'
// import RecentWork from '../components/RecentWork'

export default {
  components: {
    appAboutMe: AboutMe
    // appSkills: Skills,
    // appRecentWork: RecentWork
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

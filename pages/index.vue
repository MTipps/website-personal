<!-- TODO: Remove Tailwind stuff -->
<!-- TODO: Fix tests -->
<!-- TODO: Add Blog! -->
<template>
  <div>
    <app-about-me />
    <app-skills />
<!--    <app-recent-work :recent-works="recentWork" :recent-work-header="recentWorkHeader" :recent-work-sub-header="recentWorkSubHeader" />-->
    <!--    <app-blog v-show="false" :blog-posts="[]" :is-blog-in-url="true" />-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AboutMe from '../components/sections/AboutMe'
import Skills from '../components/sections/skills/Skills'
// import RecentWork from '../components/RecentWork'

export default {
  components: {
    appAboutMe: AboutMe,
    appSkills: Skills
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

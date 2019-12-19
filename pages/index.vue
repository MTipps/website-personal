<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
    <app-skills :tech-stack="techStack" />
    <app-recent-work :recent-works="recentWork" />
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
      'techStack',
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

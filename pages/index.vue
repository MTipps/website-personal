<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
    <app-skills />
    <app-recent-work />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import RecentWork from '../components/RecentWork'

export default {
  components: {
    appAboutMe: AboutMe,
    appSkills: Skills,
    appRecentWork: RecentWork
  }
}
</script>

<style>
</style>

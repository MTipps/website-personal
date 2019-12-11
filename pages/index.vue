<template>
  <div>
    <app-navigation />
    <div class="mx-6 lg:mx-16">
      <app-about-me />
      <app-skills />
      <app-recent-work />
      <app-blog />
    </div>
    <app-footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import RecentWork from '../components/RecentWork'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default {
  components: {
    appNavigation: Navigation,
    appAboutMe: AboutMe,
    appSkills: Skills,
    appRecentWork: RecentWork,
    appBlog: Blog,
    appFooter: Footer
  }
}
</script>

<style>
</style>

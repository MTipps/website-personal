<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
    <app-skills />
    <app-recent-work />
    <app-blog v-show="false" :blog-posts="[]" :is-blog-in-url="true" />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import RecentWork from '../components/RecentWork'
import Blog from '../components/Blog'

export default {
  components: {
    appAboutMe: AboutMe,
    appSkills: Skills,
    appRecentWork: RecentWork,
    appBlog: Blog
  }
}
</script>

<style>
</style>

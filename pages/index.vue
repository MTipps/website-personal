<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
    <app-skills />
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'

export default {
  components: {
    appAboutMe: AboutMe,
    appSkills: Skills
  }
}
</script>

<style>
</style>

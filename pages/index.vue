<template>
  <div>
    <section-about-me />
    <section-skills />
  </div>
</template>

<script>
import AboutMe from '../components/sections/AboutMe'
import Skills from '../components/sections/Skills'

export default {
  components: {
    sectionAboutMe: AboutMe,
    sectionSkills: Skills
  }
}
</script>

<style>
</style>

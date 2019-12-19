<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
<!--    <app-skills />-->
<!--    <app-recent-work />-->
<!--    <app-blog v-show="false" :blog-posts="[]" :is-blog-in-url="true" />-->
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import AboutMe from '../components/AboutMe'

export default {
  components: {
    appAboutMe: AboutMe
  },
  computed: {
    // ...mapState('homepage', [
    //   'techStack'
    // ])
  },
  mounted () {
    this.$store.dispatch('homepage/getPageItems')
  }
}
</script>

<style>
</style>

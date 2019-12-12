<template>
  <div class="mx-6 lg:mx-16">
    <app-about-me />
    <app-skills />
    <app-recent-work />
    <app-blog :blog-posts="blogPosts" :is-blog-in-url="true" />
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
  },
  // eslint-disable-next-line require-await
  async asyncData () {
    const resolve = require.context('~/blog-content/', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      // eslint-disable-next-line no-console
      console.log(name)
      return resolve(key)
    })

    // eslint-disable-next-line no-console
    console.log(imports)
    return {
      blogPosts: imports.slice(0, 3)
    }
  }
}
</script>

<style>
</style>

<template>
  <app-blog :blog-posts="blogPosts" />
</template>

<script>
import Blog from '../../components/Blog'

export default {
  name: 'index',
  // eslint-disable-next-line require-await
  async asyncData () {
    const resolve = require.context('~/blog-content/', true, /\.md$/)
    const imports = resolve.keys().map((key) => {
      const [, name] = key.match(/\/(.+)\.md$/)
      // eslint-disable-next-line no-console
      console.log(name)
      console.log(key)
      return resolve(key)
    })

    // eslint-disable-next-line no-console
    console.log(imports)
    return {
      blogPosts: imports
    }
  },
  components: {
    appBlog: Blog
  }
}
</script>

<style scoped>

</style>

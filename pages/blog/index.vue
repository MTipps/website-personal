<template>
  <app-blog :blog-posts="blogPosts" />
</template>

<script>
import Blog from '../../components/Blog'

export default {
  name: 'Index',
  components: {
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
      blogPosts: imports
    }
  }
}
</script>

<style scoped>

</style>

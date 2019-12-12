<template>
  <div>
    <h1>My blog posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="'blog/' + post.attributes.slug">{{ post.attributes.title }}</nuxt-link>
        <p>{{ post.attributes.date }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
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
      posts: imports
    }
  }
}
</script>

<style scoped>

</style>

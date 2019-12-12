<template>
  <div>
    <div class="post-title">
      <h1>{{ post.attributes.title }}</h1>
    </div>
    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Slug',
  async asyncData ({ params }) {
    try {
      const post = await import(`~/blog-content/${params.slug}.md`)
      // eslint-disable-next-line no-console
      console.log(post)
      return {
        post
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err)
      return false
    }
  }
}
</script>

<style scoped>

</style>

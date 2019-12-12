<template>
  <div class="my-6 mx-6 lg:mx-16">
    <p class="font-sans font-bold text-4xl text-pink-600 text-center">{{ post.attributes.title }}</p>
    <p>Date posted: {{ $moment(post.attributes.date).format('d/MM/YYYY') }}</p>
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

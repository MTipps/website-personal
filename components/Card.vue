<template>
  <div>
    <p>{{ image }}</p>
    <p>{{ title }}</p>
    <p>{{ description }}</p>
    <p>{{ techUsed }}</p>
    <a :href="link">Visit Site</a>
  </div>
</template>

<script>
export default {
  name: 'RecentWorkCard',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    techUsed: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

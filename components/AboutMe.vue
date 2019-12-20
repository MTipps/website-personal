<template>
  <div id="about-me" class="pt-6">
    <p v-for="text in aboutMeText" :key="text.text" v-html="text.text" class="font-sans text-lg lg:text-3xl" />
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    aboutMeText: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

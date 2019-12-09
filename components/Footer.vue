<template>
  <footer class="bg-purple-900 p-6 text-center">
    <div class="mb-6">
      <p
        v-for="phrase in catchphrase"
        :key="phrase.text"
        class="font-sans font-bold text-xl text-white">
        {{ phrase.text }}
      </p>
    </div>
    <div class="flex justify-center mb-6">
      <p>LinkedIn</p>
      <p>Github</p>
      <p>StackOverflow</p>
      <p>Codepen</p>
      <p>Email</p>
    </div>
    <div>
      <p class="font-sans text-base text-white">Created by me &#169; {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      catchphrase: [
        { text: 'Living, learning, & leveling up' },
        { text: 'one day at a time.' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

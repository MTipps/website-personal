<template>
  <div class="pt-6">
    <p v-for="text in aboutMeText" :key="text.text" v-html="text.text" class="font-sans text-lg lg:text-3xl"></p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      aboutMeText: [
        { text: 'Hi, I\'m a <b class="text-pink-600">front-end developer</b>.' },
        { text: 'I produce <b class="text-pink-600">high-quality</b> websites and <b class="text-pink-600">exceptional</b> user experience.' },
        { text: 'Do you have a project, idea or problem you\'d like to discuss?' },
        { text: 'Let\'s have a chat, <b class="text-pink-600"><a href="mailto:hey@megantipps.co.za">hey@megantipps.co.za</a></b>' }
      ]
    }
  }
}
</script>

<style scoped>

</style>

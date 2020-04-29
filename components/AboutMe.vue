<template>
  <section id="about-me" class="about-me">
    <div class="wave" />
    <p v-for="text in aboutMeText" :key="text.text" v-html="text.text" class="font-sans text-lg lg:text-3xl" />
  </section>
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

<style lang="scss" scoped>
  .about-me {
    position: relative;
    background: map-get($colours, 'tulip-tree-orange');
    height: 50vh;
    margin-top: bu(140);
  }

  .wave {
    position: absolute;
    height: 168px;
    width: 100%;
    background: map-get($colours, 'tulip-tree-orange');
    bottom: 0;
  }

  .wave::before, .wave::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
  }

  .wave::before {
    width: 53.5%;
    height: 110%;
    background-color: map-get($colours, 'white');
    right: 0;
    top: 60%;
  }
  .wave::after {
    width: 53.5%;
    height: 100%;
    background-color: map-get($colours, 'tulip-tree-orange');
    left: 0;
    top: 40%;
  }
</style>

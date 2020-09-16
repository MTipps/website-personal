<template>
  <section id="about-me" class="about-me">
    <div class="about-me__paragraph">
      Hi, I'm a <span class="about-me__strong">front-end developer</span>.
    </div>
    <span class="about-me__paragraph">
      I produce <span class="about-me__strong">high-quality</span> websites and <span class="about-me__strong">exceptional</span> user experience.
    </span>
    <span class="about-me__paragraph">
      Do you have a project, idea or problem you'd like to discuss?
    </span>
    <span class="about-me__paragraph">
      Let's have a chat, <span class="about-me__strong">hey@megantipps.co.za</span>.
    </span>
  </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style lang="scss" scoped>
  .about-me {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    row-gap: 30px;
    margin: 60px;

    &__paragraph {
      font: normal 48px/62px map-get($fonts, 'pt-sans');
      color: map-get($colours, 'colour-slate-gray');
    }

    &__strong {
      font: bold 48px/62px map-get($fonts, 'pt-sans-narrow');
      background: linear-gradient(transparent 65%, #EBA63F 35%);
      background-size: 100% 44px;
    }
  }
</style>

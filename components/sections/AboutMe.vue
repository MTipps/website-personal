<template>
  <section id="about-me" class="about-me">
    <div class="about-me__paragraph">
      Hi, I'm a <span class="about-me__strong">front-end web developer</span>.
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
    row-gap: bu(30);
    margin: bu(60);

    &__paragraph {
      @include font(map-get($fonts, 'pt-sans'), bu(48), bu(62), normal, map-get($colours, 'colour-slate-gray'));
    }

    &__strong {
      @include font(map-get($fonts, 'pt-sans-narrow'), bu(48), bu(62), bold);
      background: linear-gradient(transparent 65%, #EBA63F 35%);
      background-size: 100% bu(44);
    }
  }
</style>

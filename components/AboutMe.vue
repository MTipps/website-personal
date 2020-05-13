<template>
  <section id="about-me" class="about-me">
    <p class="about-me__paragraph">
      Hi, I'm a <strong class="about-me__strong">front-end developer</strong>.
    </p>
    <p class="about-me__paragraph">
      I produce <strong class="about-me__strong">high-quality</strong> websites and <strong class="about-me__strong">exceptional</strong> user experience.
    </p>
    <p class="about-me__paragraph">
      Do you have a project, idea or problem you'd like to discuss?
    </p>
    <p class="about-me__paragraph">
      Let's have a chat, <strong class="about-me__strong">hey@megantipps.co.za</strong>
    </p>
  </section>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style lang="scss" scoped>
  .about-me {
    position: relative;
    background: map-get($colours, 'primary-colour');
    margin-top: bu(120);
    padding: bu(50) bu(20);

    @include breakpoint(tablet) {
      margin-top: bu(140);
    }

    &__paragraph {
      @include font(map-get($fonts, 'roboto'), bu(20), map-get($shadows, 'black-68'), normal, bu(20));
      margin-bottom: bu(15);

      @include breakpoint(tablet) {
        @include font(map-get($fonts, 'roboto'), bu(25), map-get($shadows, 'black-68'), normal, bu(25));
      }
    }

    &__strong {
      @include font(map-get($fonts, 'roboto'), bu(20), map-get($shadows, 'black-87'), bold, bu(20));
      padding: 0 bu(5);

      @include breakpoint(tablet) {
        @include font(map-get($fonts, 'roboto'), bu(25), map-get($shadows, 'black-87'), bold, bu(25));
      }
    }
  }
</style>

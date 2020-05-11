<!-- TODO: See if there is a better way to make this look better, maybe use the store and v-html -->
<!-- TODO: Add modal for contact -->
<template>
  <section id="about-me" class="about-me">
    <div class="about-me__wave" />
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
    background: map-get($colours, 'tulip-tree-orange');
    margin-top: bu(120);
    padding: bu(50) bu(20) bu(60) bu(20);

    @include breakpoint(tablet) {
      margin-top: bu(140);
    }

    &__wave {
      position: absolute;
      height: 70px;
      width: 100%;
      background: map-get($colours, 'tulip-tree-orange');
      bottom: 0;
    }

    &__wave::before, &__wave::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 100% 50%;
    }

    &__wave::before {
      width: 55%;
      height: 109%;
      background-color: map-get($colours, 'white');
      right: -1.5%;
      top: 60%;
    }

    &__wave::after {
      width: 55%;
      height: 100%;
      background-color: map-get($colours, 'tulip-tree-orange');
      left: -1.5%;
      top: 40%;
    }

    &__paragraph {
      @include font(map-get($fonts, 'roboto'), bu(20), map-get($colours, 'spicy-mix-brown'), normal, bu(20));
      margin-bottom: bu(15);

      @include breakpoint(tablet) {
        @include font(map-get($fonts, 'roboto'), bu(25), map-get($colours, 'spicy-mix-brown'), normal, bu(20));
      }
    }

    &__strong {
      @include font(map-get($fonts, 'roboto'), bu(20), map-get($colours, 'hoki-blue'), bold, bu(20));

      @include breakpoint(tablet) {
        @include font(map-get($fonts, 'roboto'), bu(25), map-get($colours, 'hoki-blue'), bold, bu(20));
      }
    }
  }
</style>

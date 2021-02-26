<template>
  <nav class="navigation">
    <navigation-my-info
      :my-name="myName"
      :my-title="myTitle"
      class="navigation__my-info"
    />

    <img :src="logo" alt="animated photo of Megan Tipps as a logo" class="navigation__logo">

<!--    <navigation-links-->
<!--      :navigation-links="navigationLinks"-->
<!--      class="navigation__links"-->
<!--    />-->
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavigationMyInfo from './NavigationMyInfo'
// import NavigationLinks from './NavigationLinks'

export default {
  name: 'Navigation',
  components: {
    NavigationMyInfo
    // NavigationLinks
  },
  computed: {
    ...mapState('navigation', [
      'myName',
      'myTitle',
      'logo',
      'navigationLinks'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    display: grid;
    grid-template-columns: bu(90) 1fr bu(15);
    column-gap: 10px;
    background-color: map-get($colours, 'colour-merino');
    padding: bu(10) bu(60);

    @include breakpoint(tablet) {
      grid-template-columns: 1fr bu(90) 1fr;
    }

    &__my-info {
      grid-column: 2;
      grid-row: 1;

      @include breakpoint(tablet) {
        grid-column: 1;
      }
    }

    &__logo {
      width: bu(88);
      height: bu(94);
      justify-self: center;
      align-self: center;
      grid-column: 1;
      grid-row: 1;

      @include breakpoint(tablet) {
        grid-column: 2;
      }
    }

    &__links {
      grid-column: 3;
      grid-row: 1;
    }
  }
</style>

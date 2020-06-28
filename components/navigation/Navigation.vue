<template>
  <nav class="navigation">
    <navigation-my-info
      :my-name="myName"
      :my-title="myTitle"
    />

    <img :src="logo" alt="Black and White photo of Megan Tipps as a logo" class="navigation__logo">

    <navigation-links
      :navigation-links="navigationLinks"
    />
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavigationMyInfo from './NavigationMyInfo'
import NavigationLinks from './NavigationLinks'

export default {
  name: 'Navigation',
  components: {
    NavigationMyInfo,
    NavigationLinks
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

<!-- TODO: Update with correct mixins -->
<style lang="scss" scoped>
  .navigation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: map-get($colours, 'colour-merino');
    padding: 10px 60px;

    &__logo {
      width: 88px;
      height: 94px;
      justify-self: center;
      align-self: center;
    }
  }
</style>

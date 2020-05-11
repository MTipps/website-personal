<template>
  <nav class="navigation">
    <navigation-my-info
      :my-logo="logo"
      :my-name="myName"
      :my-title="myTitle"
    />

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

<style lang="scss" scoped>
  .navigation {
    @include flexbox;
    @include flex-align-items(center);
    @include flex-justify-content(space-between);

    background: map-get($colours, 'primary-background-colour');
    box-shadow: 0 3px 1px -2px map-get($shadows, 'black-2'),
                0 2px 2px 0 map-get($shadows, 'black-14'),
                0 1px 5px 0 map-get($shadows, 'black-12');
    /*padding: bu(20);*/
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
  }
</style>

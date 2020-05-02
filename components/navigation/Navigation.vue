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
    @include box-shadow(0, bu(2), bu(5), map-get($colours, 'spicy-mix-brown'));

    background: map-get($colours, 'tulip-tree-orange');
    padding: bu(20);
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
  }
</style>

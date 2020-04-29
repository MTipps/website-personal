<!-- TODO: Check warnings in terminal and fix-->
<template>
  <nav class="navigation">
    <nuxt-link to="/" class="navigation__left">
      <!--   Google correct way to use alt   -->
      <img :src="logo" alt="Black and White photo of Megan Tipps as a logo" class="navigation__logo">

      <div class="navigation__info-me">
        <p>
          {{ myName }}
        </p>
        <p>
          {{ myTitle }}
        </p>
      </div>
    </nuxt-link>

    <div class="navigation__tabs">
      <div
        v-for="(link, index) in navigationLinks"
        :key="link.linkName"
        class="tabs__tab"
      >
        <a
          :id="'navLink' + index"
          :href="link.linkRef"
          @click="setSelectedNavLink"
          class="tabs__tab-link"
        >
          {{ link.linkName }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  computed: {
    ...mapState('navigation', [
      'myName',
      'myTitle',
      'logo',
      'navigationLinks'
    ])
  },
  mounted () {
    const urlHash = window.location.hash
    const pathName = window.location.pathname
    let navigationQuerySelector

    if (urlHash === '') {
      navigationQuerySelector = '.tabs__tab-link'
    } else if (pathName === '/blog') {
      navigationQuerySelector = ".tabs__tab-link[href='/" + pathName + "']"
    } else {
      navigationQuerySelector = ".tabs__tab-link[href='/" + urlHash + "']"
    }

    const navigationItem = document.querySelectorAll(navigationQuerySelector)[0]
    navigationItem.setAttribute('active', '')
  },
  methods: {
    setSelectedNavLink (e) {
      const selectedElement = e.target
      const previousSelected = document.querySelectorAll('[active]')[0]
      previousSelected.removeAttribute('active')
      selectedElement.setAttribute('active', '')
    }
  }
}
</script>

<style lang="scss">
  .navigation {
    @include flexbox;
    @include flex-align-items(center);
    @include flex-justify-content(space-between);
    @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'black'), normal, bu(16));

    background: map-get($colours, 'tulip-tree-orange');
    padding: bu(20);
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;

    &__left {
      @include flexbox;
      @include flex-align-items(center);
      text-decoration: none;
    }

    &__logo {
      @include circle(bu(100), map-get($colours, 'bismark-blue'));
      margin-right: bu(20);
    }

    &__info-me {
      @include font(map-get($fonts, 'montserrat'), bu(20), map-get($colours, 'hoki-blue'), normal, bu(16));
    }

    &__info-me p:first-of-type {
      margin-bottom: bu(10);
    }

    &__tabs {
      @include flexbox;

      .tabs__tab {
        margin-right: bu(20);
      }

      .tabs__tab-link {
        @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'hoki-blue'), normal, bu(16));
        text-decoration: none;

        &[active],
        &:hover {
          border-bottom: 2px solid map-get($colours, 'hoki-blue');
        }
      }
    }
  }
</style>

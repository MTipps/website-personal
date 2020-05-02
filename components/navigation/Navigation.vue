<!-- TODO: Check warnings in terminal and fix-->
<!-- TODO: Add transition to mobile menu -->
<!-- TODO: Split left and right into 2 components as this file is getting a bit big -->
<template>
  <nav class="navigation">
    <nuxt-link to="/" class="navigation__my-info">
      <img :src="logo" alt="Black and White photo of Megan Tipps as a logo" class="logo-img">

      <div class="info-me">
        <p class="info-me-text">
          {{ myName }}
        </p>
        <p class="info-me-text">
          {{ myTitle }}
        </p>
      </div>
    </nuxt-link>

    <div class="navigation__link-container">
      <div
        :class="toggleMobileNavigation ? 'navigation-open' : 'navigation-closed'"
        class="navigation-links"
      >
        <div
          v-for="(link, index) in navigationLinks"
          :key="link.linkName"
          class="link-item"
        >
          <a
            :id="'navLink' + index"
            :href="link.linkRef"
            @click="setSelectedNavLink"
            class="link"
          >
            {{ link.linkName }}
          </a>
        </div>
      </div>
      <font-awesome-icon
        :icon="['fas', 'bars']"
        @click="toggleMobileNavigationMenu(!toggleMobileNavigation)"
        class="navigation__mobile-icon"
      />
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  data () {
    return {
      toggleMobileNavigation: false
    }
  },
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
      navigationQuerySelector = '.link'
    } else if (pathName === '/blog') {
      navigationQuerySelector = ".link[href='/" + pathName + "']"
    } else {
      navigationQuerySelector = ".link[href='/" + urlHash + "']"
    }

    const navigationItem = document.querySelectorAll(navigationQuerySelector)[0]
    navigationItem.setAttribute('active', '')

    window.addEventListener('resize', this.onWindowResize)
  },
  methods: {
    setSelectedNavLink (e) {
      const selectedElement = e.target
      const previousSelected = document.querySelectorAll('[active]')[0]
      previousSelected.removeAttribute('active')
      selectedElement.setAttribute('active', '')
      this.toggleMobileNavigationMenu(false)
    },
    toggleMobileNavigationMenu (toggleValue) {
      this.toggleMobileNavigation = toggleValue
      this.setBodyScroll()
    },
    setBodyScroll () {
      const bodyElement = document.querySelectorAll('body')[0]

      if (this.toggleMobileNavigation) {
        bodyElement.style.overflowY = 'hidden'
      } else {
        bodyElement.style.overflowY = 'scroll'
      }
    },
    onWindowResize () {
      if (window.innerWidth >= 768 && this.toggleMobileNavigation === true) {
        this.toggleMobileNavigationMenu(false)
      }
    }
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

    &__my-info {
      @include flexbox;
      @include flex-align-items(center);
      text-decoration: none;

      .logo-img {
        @include circle(bu(100), map-get($colours, 'bismark-blue'));
        margin-right: bu(20);

        @include breakpoint(max-width, 1024px) {
          @include circle(bu(80), map-get($colours, 'bismark-blue'));
        }
      }

      .info-me {
        @include font(map-get($fonts, 'montserrat'), bu(20), map-get($colours, 'hoki-blue'), normal, bu(16));

        @include breakpoint(max-width, 1024px) {
          @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'hoki-blue'), normal, bu(16));
        }
      }

      .info-me .info-me-text:first-of-type {
        margin-bottom: bu(10);
      }
    }

    &__mobile-icon {
      display: none;

      @include breakpoint(max-width, 768px) {
        display: block;
        color: map-get($colours, 'hoki-blue');
        cursor: pointer;
      }
    }

    &__link-container {
      .navigation-links {
        @include flexbox;

        flex-direction: column;
        position: absolute;
        height: 100vh;
        background: map-get($colours, 'tulip-tree-orange');
        top: bu(120);
        left: 0;
        right: 0;
        bottom: 0;

        @include breakpoint(tablet) {
          flex-direction: row;
          position: relative;
          height: auto;
          top: 0;
          padding: 0;
        }

        .link-item {
          @include breakpoint(tablet) {
            margin-right: bu(20);
          }
        }

        .link {
          @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'hoki-blue'), normal, bu(16));
          display: block;
          padding: bu(20) bu(20) bu(20) bu(20);
          text-decoration: none;

          @include breakpoint(tablet) {
            padding: 0;
          }

          &[active],
          &:hover {
            background: map-get($colours, 'hoki-blue');
            color: map-get($colours, 'tulip-tree-orange');

            @include breakpoint(tablet) {
              background: map-get($colours, 'tulip-tree-orange');
              color: map-get($colours, 'hoki-blue');
              border-bottom: bu(2) solid map-get($colours, 'hoki-blue');
            }
          }
        }
      }

      .navigation-closed {
        display: none;

        @include breakpoint(tablet) {
          @include flexbox;
        }
      }

      .navigation-open {
        @include flexbox;
      }
    }
  }
</style>

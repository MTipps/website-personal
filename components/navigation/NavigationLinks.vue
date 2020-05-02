<template>
  <div class="navigation-links">
    <div
      :class="toggleMobileNavigation ? 'navigation-open' : 'navigation-closed'"
      class="navigation-links__container"
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
      class="navigation-links__mobile-icon"
    />
  </div>
</template>

<script>
export default {
  name: 'NavigationLinks',
  props: {
    navigationLinks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      toggleMobileNavigation: false
    }
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
    setSelectedNavLink (event_) {
      const selectedElement = event_.target
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
  .navigation-links {
    &__container {
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

    &__mobile-icon {
      display: none;

      @include breakpoint(max-width, 768px) {
        display: block;
        color: map-get($colours, 'hoki-blue');
        cursor: pointer;
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
</style>

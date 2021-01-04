<template>
  <div class="navigation-links">
    <div
      :class="toggleMobileNavigation ? 'navigation-links__open' : 'navigation-links__closed'"
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
      <div class="link-item">
        <a
          href="#"
          @click="$refs.contactMe.openModal()"
          class="link"
        >
          Contact Me
        </a>
      </div>
    </div>
    <font-awesome-icon
      :icon="['fas', toggleMobileNavigation ? 'times' : 'bars']"
      @click="toggleMobileNavigationMenu(!toggleMobileNavigation)"
      class="navigation-links__mobile-icon"
    />
    <contact-me ref="contactMe"></contact-me>
  </div>
</template>

<script>
import ContactMe from '~/components/modals/ContactMe'

export default {
  name: 'NavigationLinks',
  components: {
    ContactMe
  },
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
    const pathName = window.location.pathname
    let navigationQuerySelector

    if (pathName === '/') {
      navigationQuerySelector = ".link[href='/']"
    } else {
      navigationQuerySelector = ".link[href='" + pathName + "']"
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
    },
    onWindowResize () {
      if (window.innerWidth >= 1280 && this.toggleMobileNavigation === true) {
        this.toggleMobileNavigationMenu(false)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-links {
    align-self: center;
    justify-self: end;

    &__container {
      .link-item {
        @include font(map-get($fonts, 'pt-sans-narrow'), bu(20), bu(20), bold);
        text-transform: uppercase;
        margin: bu(5) bu(60);
        height: 28px;

        @include breakpoint(desktop) {
          @include font(map-get($fonts, 'pt-sans-narrow'), bu(16), bu(21), bold);
          margin: 0 0 0 bu(25);
          height: auto;
        }

        .link {
          color: map-get($colours, 'colour-slate-gray');
          text-decoration: none;
          padding: bu(4) bu(10);
          outline: none;

          &:hover {
            display: block;
            width: 100%;
            border-radius: bu(4);
            background-color: map-get($colours, 'colour-tulip-tree');
            color: map-get($colours, 'colour-merino');

            @include breakpoint(desktop) {
              display: initial;
            }
          }

          &[active] {
            display: block;
            width: 100%;
            border-radius: bu(4);
            color: map-get($colours, 'colour-merino');
            background-color: map-get($colours, 'colour-tulip-tree');

            @include breakpoint(desktop) {
              display: initial;
              border-radius: 0;
              color: map-get($colours, 'colour-slate-gray');
              background-color: transparent;
              border-bottom: bu(2) solid map-get($colours, 'colour-tulip-tree');
            }
          }
        }
      }
    }

    &__mobile-icon {
      display: block;
      cursor: pointer;

      @include breakpoint(desktop) {
        display: none;
      }
    }

    &__open {
      position: absolute;
      top: bu(114);
      left: 0;
      background-color: map-get($colours, 'colour-merino');
      height: 100vh;
      width: 100%;
    }

    &__closed {
      display: none;

      @include breakpoint(desktop) {
        display: flex;
      }
    }
  }
</style>

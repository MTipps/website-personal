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
<!--    <font-awesome-icon-->
<!--      :icon="['fas', 'bars']"-->
<!--      @click="toggleMobileNavigationMenu(!toggleMobileNavigation)"-->
<!--      class="navigation-links__mobile-icon"-->
<!--    />-->
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

<!-- TODO: Update with correct mixins -->
<style lang="scss" scoped>
  .navigation-links {
    align-self: center;
    justify-self: end;

    &__container {
      display: flex;

      .link-item {
        font: bold 16px/21px map-get($fonts, 'pt-sans-narrow');
        text-transform: uppercase;
        margin-left: 25px;

        .link {
          color: map-get($colours, 'colour-slate-gray');
          text-decoration: none;
          padding: 4px 10px;

          &:hover {
            border-radius: 4px;
            background-color: map-get($colours, 'colour-red-ribbon');
            color: map-get($colours, 'colour-merino');
          }

          &[active] {
            border-bottom: 2px solid map-get($colours, 'colour-red-ribbon');
          }
        }
      }
    }
  }
</style>

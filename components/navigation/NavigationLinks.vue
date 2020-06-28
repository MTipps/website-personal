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

<style lang="scss" scoped>
  .navigation-links {
    align-self: center;
    justify-self: end;
  }
</style>

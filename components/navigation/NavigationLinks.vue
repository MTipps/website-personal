<template>
  <div class="navigation-links">
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

<style lang="scss" scoped>
  .navigation-links {
    @include flexbox;

    .link-item {
      margin-right: bu(20);
    }

    .link {
      @include font(map-get($fonts, 'montserrat'), bu(16), map-get($colours, 'hoki-blue'), normal, bu(16));
      text-decoration: none;

      &[active],
      &:hover {
        border-bottom: 2px solid map-get($colours, 'hoki-blue');
      }
    }
  }
</style>

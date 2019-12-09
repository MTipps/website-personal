<!-- TODO: See about adding class names to variables-->
<!-- TODO: Mobile -->

<template>
  <nav class="navigation flex items-center justify-between flex-wrap p-6 bg-purple-900 shadow-lg">
    <div class="navigation__left flex items-center mr-10 mb-6 lg:mb-0 w-full lg:w-auto">
      <div class="rounded-full h-16 w-16 bg-gray-400"></div>
      <div class="info-me pl-4">
        <p class="font-sans text-2xl text-white">{{ myName }}</p>
        <p class="font-sans text-base text-white">{{ myTitle }}</p>
      </div>
    </div>
    <div class="navigation__right">
      <ul class="flex flex-col lg:flex-row">
        <li v-for="link in navLinks" :key="link.linkName">
          <a class="font-sans text-base text-white hover:text-pink-600 lg:pl-6" :href="link.linkRef">{{ link.linkName }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      myName: 'Megan Tipps',
      myTitle: 'Front-end Web Developer',
      navLinks: [
        { linkName: 'About Me', linkRef: '#' },
        { linkName: 'Skills', linkRef: '#' },
        { linkName: 'Recent Work', linkRef: '#' },
        { linkName: 'Blog', linkRef: '#' },
        { linkName: 'hey@megantipps.co.za', linkRef: 'mailto:hey@megantipps.co.za' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

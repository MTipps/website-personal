<template>
  <svg
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
    class="fill-current text-gray-800 hover:text-purple-800 inline-block h-12 w-12"
  >
    <title :id="iconName">{{ iconName }} icon</title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box'
    }
  },
  computed: {
    viewBox () {
      let viewBox = ``

      switch (this.iconName) {
        case 'html':
          viewBox = `0 0 384 512`
          break
        case 'css':
          viewBox = `0 0 384 512`
          break
        case 'sass':
          viewBox = `0 0 640 512`
          break
        case 'javascript':
          viewBox = `0 0 448 512`
          break
        case 'jquery':
          viewBox = `0 0 50 50`
          break
        case 'vuejs':
          viewBox = `0 0 448 512`
          break
        case 'nuxtjs':
          viewBox = `0 0 400 298`
          break
        case 'react':
          viewBox = `0 0 512 512`
          break
        case 'angular':
          viewBox = `0 0 448 512`
          break
        case 'typescript':
          viewBox = `0 0 64 64`
          break
        case 'wordpress':
          viewBox = `0 0 32 32`
          break
        case 'contentful':
          viewBox = `0 0 256 289`
          break
      }

      return viewBox
    }
  }
}
</script>

<style scoped>

</style>

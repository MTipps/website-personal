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
import { mapState } from 'vuex'

export default {
  name: 'IconBase',
  props: {
    iconName: {
      type: String,
      default: 'box'
    }
  },
  computed: {
    ...mapState('techStack', [ 'techStackLabels' ]),
    viewBox () {
      let viewBox = ``

      switch (this.iconName) {
        case this.techStackLabels.html.name:
          viewBox = `0 0 384 512`
          break
        case this.techStackLabels.css.name:
          viewBox = `0 0 384 512`
          break
        case this.techStackLabels.sass.name:
          viewBox = `0 0 640 512`
          break
        case this.techStackLabels.javascript.name:
          viewBox = `0 0 448 512`
          break
        case this.techStackLabels.jquery.name:
          viewBox = `0 0 50 50`
          break
        case this.techStackLabels.vuejs.name:
          viewBox = `0 0 448 512`
          break
        case this.techStackLabels.nuxtjs.name:
          viewBox = `0 0 400 298`
          break
        case this.techStackLabels.react.name:
          viewBox = `0 0 512 512`
          break
        case this.techStackLabels.angular.name:
          viewBox = `0 0 448 512`
          break
        case this.techStackLabels.typescript.name:
          viewBox = `0 0 64 64`
          break
        case this.techStackLabels.wordpress.name:
          viewBox = `0 0 32 32`
          break
        case this.techStackLabels.contentful.name:
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

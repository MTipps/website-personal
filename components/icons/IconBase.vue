<template>
  <svg
    :viewBox="viewBox"
    :class="iconClass"
    xmlns="http://www.w3.org/2000/svg"
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
      required: true
    },
    iconClass: {
      type: String,
      required: true
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
        case this.techStackLabels.linkedin.name:
          viewBox = `0 0 448 512`
          break
        case this.techStackLabels.github.name:
          viewBox = `0 0 496 512`
          break
        case this.techStackLabels.stackoverflow.name:
          viewBox = `0 0 384 512`
          break
        case this.techStackLabels.codepen.name:
          viewBox = `0 0 512 512`
          break
        case this.techStackLabels.email.name:
          viewBox = `0 0 512 512`
          break
      }

      return viewBox
    }
  }
}
</script>

<style scoped>

</style>

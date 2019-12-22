<template>
  <app-icon-base :icon-name="iconName">
    <app-icon-html v-if="iconName === techStackLabels.html.name" />
    <app-icon-css v-if="iconName === techStackLabels.css.name" />
    <app-icon-sass v-if="iconName === techStackLabels.sass.name" />
    <app-icon-javascript v-if="iconName === techStackLabels.javascript.name" />
    <app-icon-jquery v-if="iconName === techStackLabels.jquery.name" />
    <app-icon-vuejs v-if="iconName === techStackLabels.vuejs.name" />
    <app-icon-nuxtjs v-if="iconName === techStackLabels.nuxtjs.name" />
    <app-icon-react v-if="iconName === techStackLabels.react.name" />
    <app-icon-angular v-if="iconName === techStackLabels.angular.name" />
    <app-icon-typescript v-if="iconName === techStackLabels.typescript.name" />
    <app-icon-wordpress v-if="iconName === techStackLabels.wordpress.name" />
    <app-icon-contentful v-if="iconName === techStackLabels.contentful.name" />
  </app-icon-base>
</template>

<script>
import { mapState } from 'vuex'
import IconBase from '../components/icons/IconBase'
import IconHtml from '../components/icons/IconHtml'
import IconCss from '../components/icons/IconCss'
import IconSass from './icons/IconSass'
import IconJavascript from './icons/IconJavascript'
import IconJquery from './icons/IconJquery'
import IconVuejs from './icons/IconVuejs'
import IconNuxtjs from './icons/IconNuxtjs'
import IconReact from './icons/IconReact'
import IconAngular from './icons/IconAngular'
import IconTypescript from './icons/IconTypescript'
import IconWordpress from './icons/IconWordpress'
import IconContentful from './icons/IconContentful'

export default {
  name: 'Icon',
  components: {
    appIconBase: IconBase,
    appIconHtml: IconHtml,
    appIconCss: IconCss,
    appIconSass: IconSass,
    appIconJavascript: IconJavascript,
    appIconJquery: IconJquery,
    appIconVuejs: IconVuejs,
    appIconNuxtjs: IconNuxtjs,
    appIconReact: IconReact,
    appIconAngular: IconAngular,
    appIconTypescript: IconTypescript,
    appIconWordpress: IconWordpress,
    appIconContentful: IconContentful
  },
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('techStack', [ 'techStackLabels' ])
  }
}
</script>

<template>
  <app-icon-base :icon-name="iconName">
    <app-icon-html v-if="iconName === 'html'" />
    <app-icon-css v-if="iconName === 'css'" />
    <app-icon-sass v-if="iconName === 'sass'" />
    <app-icon-javascript v-if="iconName === 'javascript'" />
    <app-icon-jquery v-if="iconName === 'jquery'" />
    <app-icon-vuejs v-if="iconName === 'vuejs'" />
    <app-icon-nuxtjs v-if="iconName === 'nuxtjs'" />
    <app-icon-react v-if="iconName === 'react'" />
    <app-icon-angular v-if="iconName === 'angular'" />
    <app-icon-typescript v-if="iconName === 'typescript'" />
    <app-icon-wordpress v-if="iconName === 'wordpress'" />
    <app-icon-contentful v-if="iconName === 'contentful'" />
  </app-icon-base>
</template>

<script>
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
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
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
  }
}
</script>

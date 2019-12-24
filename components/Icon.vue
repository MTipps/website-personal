<template>
  <app-icon-base :icon-name="iconName" :icon-class="iconClass">
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

    <app-icon-linkedin v-if="iconName === techStackLabels.linkedin.name" />
    <app-icon-github v-if="iconName === techStackLabels.github.name" />
    <app-icon-stackoverflow v-if="iconName === techStackLabels.stackoverflow.name" />
    <app-icon-codepen v-if="iconName === techStackLabels.codepen.name" />
    <app-icon-email v-if="iconName === techStackLabels.email.name" />
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
import IconLinkedin from './icons/IconLinkedin'
import IconGithub from './icons/IconGithub'
import IconStackoverflow from './icons/IconStackoverflow'
import IconCodepen from './icons/IconCodepen'
import IconEmail from './icons/IconEmail'

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
    appIconContentful: IconContentful,
    appIconLinkedin: IconLinkedin,
    appIconGithub: IconGithub,
    appIconStackoverflow: IconStackoverflow,
    appIconCodepen: IconCodepen,
    appIconEmail: IconEmail
  },
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
    ...mapState('techStack', [ 'techStackLabels' ])
  }
}
</script>

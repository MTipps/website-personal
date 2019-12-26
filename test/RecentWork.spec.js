import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import RecentWork from '@/components/RecentWork.vue'

let wrapper
let store
let state
const localVue = createLocalVue()
const recentWorkHeader = ''
const recentWorkSubHeader = ''
const recentWorks = [
  {
    image: '',
    title: '',
    description: '',
    techUsed: [
      {
        techName: '',
        techIcon: [ '' ]
      }
    ],
    link: ''
  }
]
const vueLazyLoad = Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
})

localVue.use(Vuex)

beforeEach(() => {
  state = {
    techStackLabels: {
      html: {
        name: 'html'
      },
      css: {
        name: 'css'
      },
      sass: {
        name: 'sass'
      },
      javascript: {
        name: 'javascript'
      },
      jquery: {
        name: 'jquery'
      },
      vuejs: {
        name: 'vuejs'
      },
      nuxtjs: {
        name: 'nuxtjs'
      },
      react: {
        name: 'react'
      },
      angular: {
        name: 'angular'
      },
      typescript: {
        name: 'typescript'
      },
      wordpress: {
        name: 'wordpress'
      },
      contentful: {
        name: 'contentful'
      },
      linkedin: {
        name: 'linkedin'
      },
      github: {
        name: 'github'
      },
      stackoverflow: {
        name: 'stackoverflow'
      },
      codepen: {
        name: 'codepen'
      },
      email: {
        name: 'email'
      }
    }
  }

  store = new Vuex.Store({
    modules: {
      techStack: {
        namespaced: true,
        state
      }
    }
  })

  wrapper = mount(RecentWork, {
    store,
    localVue,
    propsData: {
      recentWorkHeader,
      recentWorkSubHeader,
      recentWorks
    },
    directives: {
      vueLazyLoad
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('RecentWork', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

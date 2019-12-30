import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Skills from '@/components/Skills.vue'

let wrapper
let store
let state
const localVue = createLocalVue()
const techStackHeader = ''
const techStackSubHeader = ''
const techStack = [
  {
    techName: '',
    techIcon: [ '' ],
    techProgress: 0
  }
]

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

  wrapper = mount(Skills, {
    store,
    localVue,
    propsData: {
      techStackHeader,
      techStackSubHeader,
      techStack
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Skills', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

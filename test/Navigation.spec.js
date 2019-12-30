import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import Navigation from '@/components/Navigation.vue'

let wrapper
let store
let state
let actions
const localVue = createLocalVue()
const vueLazyLoad = Vue.use(VueLazyload, {
  preLoad: 1,
  attempt: 1
})

localVue.use(Vuex)

beforeEach(() => {
  state = {
    navigation: {
      myName: '',
      myTitle: '',
      logo: '',
      navigationLinks: [
        {
          linkName: '',
          linkRef: ''
        }
      ]
    }
  }

  actions = {
    getNavigationItems: jest.fn()
  }

  store = new Vuex.Store({
    modules: {
      navigation: {
        namespaced: true,
        state,
        actions
      }
    }
  })

  wrapper = mount(Navigation, {
    store,
    localVue,
    stubs: {
      NuxtLink: RouterLinkStub
    },
    directives: {
      vueLazyLoad
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Navigation', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

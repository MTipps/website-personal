import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Footer from '@/components/Footer.vue'

let wrapper
let store
let state
let actions
const localVue = createLocalVue()
localVue.use(Vuex)

beforeEach(() => {
  state = {
    footer: {
      catchphrase: '',
      socialMedia: [],
      createdByText: '',
      createdWith: ''
    }
  }

  actions = {
    getFooterItems: jest.fn()
  }

  store = new Vuex.Store({
    modules: {
      footer: {
        namespaced: true,
        state,
        actions
      }
    }
  })

  wrapper = mount(Footer, {
    store,
    localVue
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Footer', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

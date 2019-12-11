import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Card from '@/components/Card.vue'

let wrapper
let store
let state
const localVue = createLocalVue()
const image = ''
const title = ''
const description = ''
const techUsed = []
const link = ''
const linkText = ''

localVue.use(Vuex)

beforeEach(() => {
  state = {
    techStackData: {
      techStack: [
        {
          techName: 'HTML',
          techIcon: '<svg class="fill-current text-gray-800 hover:text-pink-600 inline-block h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">\n' +
            '<path fill="currentColor" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path>\n' +
            '</svg>',
          techProgress: 80
        }
      ]
    }
  }

  store = new Vuex.Store({ state })

  wrapper = mount(Card, {
    store,
    localVue,
    propsData: {
      image,
      title,
      description,
      techUsed,
      link,
      linkText
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Card', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('is tech stack icons with values', () => {
    const iconsNameArray = [ 'HTML' ]
    const iconsArray = wrapper.vm.getTechStackIcons(iconsNameArray)

    expect(iconsArray[0]).toBeTruthy()
  })

  test('is tech stack icons empty', () => {
    const iconsNameArray = []
    const iconsArray = wrapper.vm.getTechStackIcons(iconsNameArray)

    expect(iconsArray[0]).toBeFalsy()
  })
})

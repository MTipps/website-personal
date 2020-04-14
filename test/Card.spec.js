import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import Card from '@/components/Card.vue'

let wrapper
const image = ''
const title = ''
const description = ''
const techUsed = []
const link = ''
const linkText = ''
const openNewTab = true

beforeEach(() => {
  wrapper = mount(Card, {
    propsData: {
      image,
      title,
      description,
      techUsed,
      link,
      linkText,
      openNewTab
    },
    stubs: {
      NuxtLink: RouterLinkStub
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
})

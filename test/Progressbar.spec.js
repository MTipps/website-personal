import { mount } from '@vue/test-utils'
import Progressbar from '@/components/Progressbar.vue'

const progressInnerWidth = 10

const factory = () => {
  return mount(Progressbar, {
    propsData: {
      progressInnerWidth
    }
  })
}

describe('Progressbar', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

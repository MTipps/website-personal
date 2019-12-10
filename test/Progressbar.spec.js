import { mount } from '@vue/test-utils'
import Progressbar from '@/components/Progressbar.vue'

describe('Progressbar', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Progressbar)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

import { mount } from '@vue/test-utils'
import SectionHeading from '@/components/SectionHeading.vue'

describe('SectionHeading', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(SectionHeading)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

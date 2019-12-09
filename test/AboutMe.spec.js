import { mount } from '@vue/test-utils'
import AboutMe from '@/components/AboutMe.vue'

describe('AboutMe', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AboutMe)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

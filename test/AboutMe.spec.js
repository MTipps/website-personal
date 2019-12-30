import { mount } from '@vue/test-utils'
import AboutMe from '@/components/AboutMe.vue'

const aboutMeText = [ '' ]

describe('AboutMe', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AboutMe, {
      propsData: {
        aboutMeText
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

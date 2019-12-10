import { mount } from '@vue/test-utils'
import SectionHeading from '@/components/SectionHeading.vue'

const header = 'This is my header text'
const subHeader = 'This is my sub header text'

const factory = () => {
  return mount(SectionHeading, {
    propsData: {
      header,
      subHeader
    }
  })
}

describe('SectionHeading', () => {
  test('is a Vue instance', () => {
    const wrapper = factory()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

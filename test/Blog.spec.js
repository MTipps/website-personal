import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuex from 'vuex'
import Blog from '@/components/Blog.vue'

let wrapper
let store
let state
const isBlogInUrl = true
const localVue = createLocalVue()

const blogPosts = [
  {
    attributes: {
      image: '',
      title: '',
      intro: '',
      techUsed: [ 'React', 'Typescript' ],
      date: new Date(),
      slug: ''
    },
    html: 'Blah blah blah'
  }
]

localVue.use(Vuex)

beforeEach(() => {
  state = {
    recentWorkData: {
      recentWorks: [
        {
          image: 'https://via.placeholder.com/728x90',
          title: 'What a Post',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum felis dui, congue mollis massa fermentum eget. Etiam sed suscipit sapien. Integer imperdiet odio eget arcu condimentum, sed viverra',
          techUsed: [ 'HTML', 'CSS', 'Javascript', 'Typescript' ],
          link: 'Link to Site'
        }
      ]
    },
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

  wrapper = mount(Blog, {
    store,
    localVue,
    propsData: {
      isBlogInUrl,
      blogPosts
    },
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Blog', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

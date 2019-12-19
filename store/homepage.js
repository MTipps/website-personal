import { createClient } from '../plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  techStack: null
})

export const mutations = {
  setTechStack (state, data) {
    state.techStack = data
  }
}

export const actions = {
  getPageItems ({ commit }) {
    contentfulClient.getEntries({
      'content_type': 'homePage'
    }).then((page) => {
      if (page) {
        const techStack = page.items[0].fields.techStack
        commit('setTechStack', techStack)
      }
    }).catch((err) => {
      console.log('error', err)
    })
  }
}

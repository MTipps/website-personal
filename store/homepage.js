import { createClient } from '../plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  techStack: []
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
        const rawTechStack = page.items[0].fields.techStack
        const techStackArray = []

        rawTechStack.forEach(function (techStack) {
          const tech = {
            techName: techStack.fields.techName,
            techIcon: techStack.fields.techIcon,
            techProgress: techStack.fields.techProgress
          }

          techStackArray.push(tech)
        })

        commit('setTechStack', techStackArray)
      }
    }).catch((err) => {
      console.log('error', err)
    })
  }
}

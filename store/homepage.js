import { createClient } from '../plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  techStack: [],
  recentWork: []
})

export const mutations = {
  setTechStack (state, data) {
    state.techStack = data
  },
  setRecentWork (state, data) {
    state.recentWork = data
  }
}

export const actions = {
  getPageItems ({ commit }) {
    contentfulClient.getEntries({
      'content_type': 'homePage'
    }).then((page) => {
      if (page) {
        const rawTechStack = page.items[0].fields.techStack
        const rawRecentWork = page.items[0].fields.recentWork

        console.log(createRecentWorkObjectArray(rawRecentWork))

        commit('setTechStack', createTechStackObjectArray(rawTechStack))
        commit('setRecentWork', createRecentWorkObjectArray(rawRecentWork))
      }
    }).catch((err) => {
      console.log('error', err)
    })
  }
}

function createTechStackObjectArray (rawTechStack) {
  const techStackArray = []

  rawTechStack.forEach(function (techStack) {
    const tech = {
      techName: techStack.fields.techName,
      techIcon: techStack.fields.techIcon,
      techProgress: techStack.fields.techProgress
    }

    techStackArray.push(tech)
  })

  return techStackArray
}

function createRecentWorkObjectArray (rawRecentWork) {
  const recentWorkArray = []

  rawRecentWork.forEach(function (recentWork) {
    const work = {
      image: recentWork.fields.image.fields.file.url,
      title: recentWork.fields.title,
      description: recentWork.fields.description,
      techUsed: createTechStackObjectArray(recentWork.fields.techUsed),
      link: recentWork.fields.link
    }

    recentWorkArray.push(work)
  })

  return recentWorkArray
}

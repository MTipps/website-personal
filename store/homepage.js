import { createClient } from '../plugins/contentful'
import richTextUtilities from '../plugins/richTextUtilities'
const contentfulClient = createClient()

export const state = () => ({
  aboutMeText: [],
  techStackHeader: '',
  techStackSubHeader: '',
  techStack: [],
  recentWorkHeader: '',
  recentWorkSubHeader: '',
  recentWork: []
})

export const mutations = {
  setAboutMeText (state, data) {
    state.aboutMeText = data
  },
  setTechStackHeader (state, data) {
    state.techStackHeader = data
  },
  setTechStackSubHeader (state, data) {
    state.techStackSubHeader = data
  },
  setTechStack (state, data) {
    state.techStack = data
  },
  setRecentWorkHeader (state, data) {
    state.recentWorkHeader = data
  },
  setRecentWorkSubHeader (state, data) {
    state.recentWorkSubHeader = data
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
        const { techStackHeader, techStackSubHeader, recentWorkHeader, recentWorkSubHeader } = page.items[0].fields
        const rawAboutMe = page.items[0].fields.aboutMe.content
        const rawTechStack = page.items[0].fields.techStack
        const rawRecentWork = page.items[0].fields.recentWork

        commit('setTechStackHeader', techStackHeader)
        commit('setTechStackSubHeader', techStackSubHeader)
        commit('setRecentWorkHeader', recentWorkHeader)
        commit('setRecentWorkSubHeader', recentWorkSubHeader)

        commit('setAboutMeText', createAboutMeArray(rawAboutMe))
        commit('setTechStack', createTechStackObjectArray(rawTechStack))
        commit('setRecentWork', createRecentWorkObjectArray(rawRecentWork))
      }
    }).catch((error_) => {
      // eslint-disable-next-line no-console
      console.log('error', error_)
    })
  }
}

function createAboutMeArray (rawAboutMe) {
  const paragraphsArray = []

  rawAboutMe.forEach(function (paragraph) {
    const paragraphValue = richTextUtilities.convertRichTextToUpdatedArray(paragraph.content)

    const paragraphUpdated = {
      text: paragraphValue
    }
    paragraphsArray.push(paragraphUpdated)
  })

  return paragraphsArray
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

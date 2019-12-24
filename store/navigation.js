import { createClient } from '../plugins/contentful'
const contentfulClient = createClient()

export const state = () => ({
  myName: '',
  myTitle: '',
  logo: '',
  navigationLinks: []
})

export const mutations = {
  setMyName (state, data) {
    state.myName = data
  },
  setMyTitle (state, data) {
    state.myTitle = data
  },
  setLogo (state, data) {
    state.logo = data
  },
  setNavigationLinks (state, data) {
    state.navigationLinks = data
  }
}

export const actions = {
  getNavigationItems ({ commit }) {
    contentfulClient.getEntries({
      'content_type': 'navigation'
    }).then((navigation) => {
      if (navigation) {
        const myName = navigation.items[0].fields.name
        const myTitle = navigation.items[0].fields.jobTitle
        const logo = navigation.items[0].fields.logo.fields.file.url
        const rawLinks = navigation.items[0].fields.links

        commit('setMyName', myName)
        commit('setMyTitle', myTitle)
        commit('setLogo', logo)
        commit('setNavigationLinks', createLinkObjectArray(rawLinks))
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log('error', err)
    })
  }
}

function createLinkObjectArray (rawLinks) {
  const linksArray = []

  rawLinks.forEach(function (links) {
    const link = {
      linkName: links.fields.linkName,
      LinkRef: links.fields.linkUrl
    }

    linksArray.push(link)
  })

  return linksArray
}

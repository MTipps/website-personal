import { createClient } from '../plugins/contentful'
import richTextUtilities from '../plugins/richTextUtilities'
const contentfulClient = createClient()

export const state = () => ({
  catchphrase: '',
  socialMedia: [],
  createdByText: '',
  createdWith: ''
})

export const mutations = {
  setCatchphrase (state, data) {
    state.catchphrase = data
  },
  setSocialMedia (state, data) {
    state.socialMedia = data
  },
  setCreatedByText (state, data) {
    state.createdByText = data
  },
  setCreatedWith (state, data) {
    state.createdWith = data
  }
}

export const actions = {
  getFooterItems ({ commit }) {
    contentfulClient.getEntries({
      'content_type': 'footer'
    }).then((footer) => {
      if (footer) {
        const rawCatchphrase = footer.items[0].fields.catchphrase.content
        const rawLinks = footer.items[0].fields.sociaMedia
        const createdByText = footer.items[0].fields.createdByText
        const rawCreatedWith = footer.items[0].fields.createdWith.content

        commit('setCatchphrase', createParagraphArray(rawCatchphrase))
        commit('setSocialMedia', createSocialMediaObjectArray(rawLinks))
        commit('setCreatedByText', createdByText)
        commit('setCreatedWith', createParagraphArray(rawCreatedWith))
      }
    }).catch((err) => {
      // eslint-disable-next-line no-console
      console.log('error', err)
    })
  }
}

function createParagraphArray (rawParagraphs) {
  const paragraphsArray = []

  rawParagraphs.forEach(function (paragraph) {
    const paragraphValue = richTextUtilities.convertRichTextToUpdatedArray(paragraph.content)

    const paragraphUpdated = {
      text: paragraphValue
    }
    paragraphsArray.push(paragraphUpdated)
  })

  return paragraphsArray
}

function createSocialMediaObjectArray (rawLinks) {
  const linksArray = []

  rawLinks.forEach(function (links) {
    const link = {
      linkRef: links.fields.linkUrl,
      linkIcon: links.fields.icon[0]
    }

    linksArray.push(link)
  })

  return linksArray
}

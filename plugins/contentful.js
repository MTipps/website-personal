const contentful = require('contentful')

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

// console.log(process.env.NODE_ENV)

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.NODE_ENV !== 'production' ? process.env.CTF_CPA_ACCESS_TOKEN : process.env.CTF_CDA_ACCESS_TOKEN,
  host: process.env.NODE_ENV !== 'production' ? 'preview.contentful.com' : 'cdn.contentful.com',
  environment: process.env.CTF_ENVIRONMENT
}

// console.log(config)

// export `createClient` to use it in page components
module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}

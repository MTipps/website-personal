<template>
  <div class="default">
    <app-navigation />
    <nuxt class="default__slot" />
    <app-footer v-show="false" />
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'

export default {
  components: {
    appNavigation: Navigation,
    appFooter: Footer
  },
  asyncData ({ params, error }) {
    return axios.get(`https://my-api/posts/${params.id}`)
      .then((result_) => {
        return { title: result_.data.title }
      })
      .catch((error_) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}
</script>

<style lang="scss">
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  .default {
    @include flexbox;
    @include flex-direction(column);
    min-height: 100vh;

    &__slot {
     flex: 1 1 0;
    }
  }
</style>

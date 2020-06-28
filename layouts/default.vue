<template>
  <div class="default">
    <app-navigation />
    <nuxt class="default__slot" />
<!--    <app-footer v-show="false" />-->
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '../components/navigation/Navigation'
// import Footer from '../components/Footer'

export default {
  components: {
    appNavigation: Navigation
    // appFooter: Footer
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
  body {
    background-color: map-get($colours, 'primary-background-colour');
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

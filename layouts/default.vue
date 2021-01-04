<!-- TODO: Remove unused code -->
<template>
  <div class="default">
    <section-navigation />
    <nuxt class="default__slot" />
    <section-footer />
    <!--<app-maintenance></app-maintenance>-->
  </div>
</template>

<script>
import axios from 'axios'
import Navigation from '../components/navigation/Navigation'
import Footer from '../components/Footer'
// import Maintenance from '@/components/Maintenance'

export default {
  components: {
    sectionNavigation: Navigation,
    sectionFooter: Footer
    // appMaintenance: Maintenance
  },
  asyncData ({ params, error }) {
    return axios.get(`https://my-api/posts/${params.id}`)
      .then((result_) => {
        return { title: result_.data.title }
      })
      .catch((error_) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  methods: {

  }
}
</script>

<style lang="scss">
  body {
    background-color: map-get($colours, 'colour-merino');
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

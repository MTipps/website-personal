<template>
  <div class="maintenance">
    <img :src="logo" alt="animated photo of Megan Tipps as a logo" class="navigation__logo">
    <div>
      Hi, my name is Megan Tipps! I am a front-end web developer.
    </div>
    <div>
      You may notice that my site is a bit empty. That is because I am giving it some much needed love and care.
    </div>
    <div>
      If you would like to get a hold of me, please contact me at <a href="mailto:hey@megantipps.co.za">hey@megantipps.co.za</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Maintenance',
  computed: {
    ...mapState('navigation', [
      'logo'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .maintenance {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

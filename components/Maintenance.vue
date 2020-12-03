<template>
  <div class="maintenance">
    <img :src="logo" alt="animated photo of Megan Tipps as a logo" class="maintenance__logo">
    <div class="maintenance__paragraph">
      Hi, my name is Megan Tipps! I am a front-end web developer.
    </div>
    <div class="maintenance__paragraph">
      You may notice that my site is a bit empty. That is because I am giving it some much needed love and care.
    </div>
    <div class="maintenance__paragraph">
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
    padding: bu(20);

    &__logo {
      width: bu(88);
      height: bu(94);
    }

    &__paragraph {
      @include font(map-get($fonts, 'pt-sans'), bu(25), bu(40), normal, map-get($colours, 'colour-slate-gray'));
    }

    &__paragraph a {
      @include font(map-get($fonts, 'pt-sans'), bu(25), bu(40), normal, map-get($colours, 'colour-pelorous'));
    }
  }
</style>

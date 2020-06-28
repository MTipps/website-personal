<template>
  <nuxt-link to="/" class="navigation-my-info">
    <p class="navigation-my-info__name">
      {{ myName }}
    </p>
    <p class="navigation-my-info__title">
      {{ myTitle }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavigationMyInfo',
  props: {
    myName: {
      type: String,
      required: true
    },
    myTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation-my-info {
    align-self: center;
    text-decoration: none;

    &__name, &__title {
      color: map-get($colours, 'colour-slate-gray');
      text-transform: uppercase;
    }

    &__name {
      font: bold 24px/31px map-get($fonts, 'pt-sans-narrow');
      margin-bottom: 6px;
    }

    &__title {
      font: normal 16px/21px map-get($fonts, 'pt-sans');
    }
  }
</style>

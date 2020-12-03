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
      @include font(map-get($fonts, 'pt-sans-narrow'), bu(24), bu(31), bold);
      margin-bottom: 6px;
    }

    &__title {
      @include font(map-get($fonts, 'pt-sans'), bu(16), bu(21), normal);
    }
  }
</style>

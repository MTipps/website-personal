<template>
  <div id="skill-card" class="skill-card">
    <div class="skill-card__header">
      <font-awesome-icon :icon="['fab', skillIcon]" size="4x" class="header-icon" />
      <p class="header-text">
        {{ skillTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  props: {
    skillTitle: {
      type: String,
      required: true
    },
    skillIcon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-card {
  @include flexbox;
  @include flex-direction(column);
  @include flex-justify-content(center);
  @include flex-align-items(center);
  padding: bu(20);
  width: bu(90);
  text-align: center;

  &__header {
    .header-text {
      @include font(map-get($fonts, 'pt-sans-narrow'), bu(18), bu(23), bold, map-get($colours, 'colour-pelorous'));
      margin-bottom: bu(15);
    }

    .header-icon {
      margin-bottom: bu(20);
      color: map-get($colours, 'colour-slate-gray');
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      &:hover {
        color: map-get($colours, 'colour-tulip-tree');
      }
    }
  }
}
</style>

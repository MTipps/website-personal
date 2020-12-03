<template>
  <div id="skill-card" class="skill-card">
    <div class="skill-card__header">
      <p class="header-text">
        {{ skillTitle }}
      </p>
      <font-awesome-icon :icon="['fab', skillIcon]" size="3x" class="header-icon" />
    </div>
    <div class="skill-card__body">
      <p class="body-info">
        {{ skillInfo }}
      </p>
      <a :href="skillLink" target="_blank" class="body-link">
        Find out more
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="body-link__icon" />
      </a>
    </div>
    <div class="skill-card__footer">
      <p>Skill Level:</p>
      <p>progressbar</p>
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
    skillInfo: {
      type: String,
      required: true
    },
    skillLink: {
      type: String,
      required: true
    },
    skillProgress: {
      type: Number,
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
// TODO: Update with correct mixins
.skill-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-right: 10px;
  width: 300px;

  &__header {
    .header-text {
      @include font(map-get($fonts, 'pt-sans-narrow'), bu(18), bu(23), bold, map-get($colours, 'colour-pelorous'));
      margin-bottom: bu(15);
    }

    .header-icon {
      margin-bottom: bu(20);
    }
  }

  &__body {
    .body-info {
      @include font(map-get($fonts, 'pt-sans'), bu(9), bu(12), bold, map-get($colours, 'colour-slate-gray'));
      margin-bottom: 10px;
    }

    .body-link {
      @include font(map-get($fonts, 'pt-sans'), bu(9), bu(12), bold, map-get($colours, 'colour-tulip-tree'));
      text-decoration: none;
      outline: none;
    }
  }

  &__footer {

  }
}
</style>

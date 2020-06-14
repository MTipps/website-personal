<!-- TODO: Add animation to progressbar -->

<template>
  <div id="card-skill" class="card-skill">
    <div class="card-skill__header">
      <p class="header-icon">ICON</p>
      <p class="header-text">
        {{ skillTitle }}
      </p>
    </div>
    <div class="card-skill__body">
      <p class="body-info">
        {{ skillInfo }}
      </p>
      <p class="body-link">
        {{ skillLink }}
      </p>
    </div>
    <div class="card-skill__footer">
      <p>Skill Level:</p>
      <p>progressbar</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSkill',
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
    }
  }
}
</script>

<style lang="scss" scoped>
  // TODO: Update with correct mixins
  .card-skill {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-right: 10px;
    width: 300px;
    box-shadow: 0 3px 1px -2px map-get($shadows, 'black-2'),
                0 2px 2px 0 map-get($shadows, 'black-14'),
                0 1px 5px 0 map-get($shadows, 'black-12');

    &__header {

      .header-icon {
        height: 50px;
        width: 50px;
        background-color: yellow; // remove when done
        margin-bottom: 20px;
      }

      .header-text {
        color: map-get($colours, 'primary-colour');
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }

    &__body {
      .body-info {
        color: map-get($colours, 'secondary-colour');
        font-size: 15px;
      }

      .body-link {

      }
    }

    &__footer {

    }
  }
</style>

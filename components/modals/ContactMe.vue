<template>
  <transition name="fade">
    <div v-if="show" class="contact-me">
      <div class="contact-me__backdrop" @click="closeModal()" />

      <div class="contact-me__dialog">
        <div class="contact-me__header">
          <div class="header-title">
            Please fill in your details
          </div>
          <font-awesome-icon
            :icon="['fas', 'times']"
            class="header-close"
            @click="closeModal()"
          />
        </div>
        <div class="contact-me__body">

        </div>
        <div class="contact-me__footer">
          <button class="footer-button">
            Send
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ContactMe',
  data () {
    return {
      show: false
    }
  },
  methods: {
    closeModal () {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal () {
      this.show = true
      document.querySelector('body').classList.add('overflow-hidden')
    }
  }
}
</script>

<style lang="scss" scoped>
  .contact-me {
    overflow-x: hidden;
    overflow-y: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;

    &__backdrop {
      background-color: rgba(0, 0, 0, 0.3);
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    &__dialog {
      background-color: map-get($colours, 'colour-merino');
      position: relative;
      width: bu(600);
      margin: bu(50) auto;
      display: flex;
      flex-direction: column;
      border-radius: bu(5);
      z-index: 2;

      @media screen and (max-width: 992px) {
        width: 90%;
      }
    }

    &__header {
      @include flexbox;
      @include flex-justify-content(space-between);
      padding: bu(20) bu(20) bu(10);
    }

    &__body {
      @include flexbox;
      @include flex-direction(column);
      @include flex-align-items(stretch);
      padding: bu(10) bu(20) bu(10);
      overflow: auto;
    }

    &__footer {
      padding: bu(10) bu(20) bu(20);
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>

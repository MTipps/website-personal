<template>
  <footer class="footer">
    <div class="footer__motto">
      <p class="motto-text">Living, learning, & leveling up</p>
      <p class="motto-text">one day at a time.</p>
    </div>

    <div class="footer__social-media">
      <a href="https://www.linkedin.com/in/megantipps/">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://github.com/MTipps/">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://stackoverflow.com/users/6733443/megan">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://codepen.io/megantipps">
        <font-awesome-icon :icon="['fab', 'codepen']" size="2x" class="social-media-icon" />
      </a>
    </div>

    <div class="footer__copyright">
      <p class="copyright-text">
        Created by me &#169; {{ new Date().getFullYear() }}
      </p>
      <p class="copyright-text">
        Website created with
        <a href="https://nuxtjs.org/" class="copyright-link">NuxtJS</a>
        and hosted on
        <a href="https://www.netlify.com/" class="copyright-link">Netlify</a>.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- TODO: Update with correct mixins -->
<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 30px;
  background-color: map-get($colours, 'colour-slate-gray');
  padding: 30px;

  &__motto,
  &__social-media,
  &__copyright {
    justify-self: center;
    align-self: center;
  }

  &__motto {
    .motto-text {
      font: bold 18px/23px map-get($fonts, 'pt-sans');
      color: map-get($colours, 'colour-merino');
      text-align: center;
    }
  }

  &__social-media {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    .social-media-icon {
      color: map-get($colours, 'colour-tulip-tree');

      &:hover {
        color: map-get($colours, 'colour-pelorous');
      }
    }
  }

  &__copyright {
    .copyright-text {
      font: normal 12px/13px map-get($fonts, 'pt-sans');
      color: map-get($colours, 'colour-merino');
      text-align: center;

      &:first-of-type {
        margin-bottom: 5px;
      }
    }

    .copyright-link {
      color: map-get($colours, 'colour-pelorous');
      text-decoration: none;
    }
  }
}
</style>

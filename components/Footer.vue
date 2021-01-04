<template>
  <footer class="footer">
    <div class="footer__motto">
      <p class="motto-text">Living, learning, & leveling up</p>
      <p class="motto-text">one day at a time.</p>
    </div>

    <div class="footer__social-media">
      <a href="https://www.linkedin.com/in/megantipps/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://github.com/MTipps/" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://stackoverflow.com/users/6733443/megan" target="_blank">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x" class="social-media-icon" />
      </a>
      <a href="https://codepen.io/megantipps" target="_blank">
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

<style lang="scss" scoped>
.footer {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: bu(30);
  background-color: map-get($colours, 'colour-slate-gray');
  padding: bu(30);

  &__motto,
  &__social-media,
  &__copyright {
    justify-self: center;
    align-self: center;
  }

  &__motto {
    .motto-text {
      @include font(map-get($fonts, 'pt-sans'), bu(18), bu(23), bold, map-get($colours, 'colour-merino'));
      text-align: center;
    }
  }

  &__social-media {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: bu(20);

    .social-media-icon {
      color: map-get($colours, 'colour-tulip-tree');

      &:hover {
        color: map-get($colours, 'colour-pelorous');
      }
    }
  }

  &__copyright {
    .copyright-text {
      @include font(map-get($fonts, 'pt-sans'), bu(12), bu(13), normal, map-get($colours, 'colour-merino'));
      text-align: center;

      &:first-of-type {
        margin-bottom: bu(5);
      }
    }

    .copyright-link {
      color: map-get($colours, 'colour-pelorous');
      text-decoration: none;
    }
  }
}
</style>

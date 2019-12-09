<!-- TODO: Add links to array -->
<!-- TODO: Add left text to variables -->
<!-- TODO: See about adding class names to variables-->
<!-- TODO: Mobile -->

<template>
  <nav class="navigation flex items-center justify-between flex-wrap p-6 bg-purple-900 shadow-lg">
    <div class="navigation__left flex items-center">
      <div class="rounded-full h-16 w-16 bg-gray-400"></div>
      <div class="info-me pl-4">
        <p class="font-sans text-2xl text-white">Megan Tipps</p>
        <p class="font-sans text-base text-white">Front-end Web Developer</p>
      </div>
    </div>
    <div class="navigation__right">
      <ul class="flex flex-col sm:flex-row">
        <li><a class="font-sans text-base text-white hover:text-pink-600 pl-6" href="#">About Me</a></li>
        <li><a class="font-sans text-base text-white hover:text-pink-600 pl-6" href="#">Skills</a></li>
        <li><a class="font-sans text-base text-white hover:text-pink-600 pl-6" href="#">Recent Work</a></li>
        <li><a class="font-sans text-base text-white hover:text-pink-600 pl-6" href="#">Blog</a></li>
        <li><a class="font-sans text-base text-white hover:text-pink-600 pl-6" href="mailto:hey@megantipps.co.za">hey@megantipps.co.za</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
</style>

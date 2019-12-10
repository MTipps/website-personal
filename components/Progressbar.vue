<template>
  <div>
    <div class="relative bg-gray-800 w-64 h-5">
      <div class="absolute bg-pink-600 h-5" :style="'width: ' + progressInnerWidth + '%;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progressbar',
  props: {
    progressInnerWidth: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

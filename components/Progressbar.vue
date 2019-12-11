<template>
  <div>
    <div class="relative bg-gray-800 w-40 sm:w-40 h-6">
      <div :style="'width: ' + progressInnerWidth + '%;'" class="absolute bg-pink-600 h-6" />
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

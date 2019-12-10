<template>
  <div class="pt-6 text-center">
    <p class="font-sans font-bold text-4xl text-pink-600">
      {{ header }}
    </p>
    <p class="font-sans text-lg">
      {{ subHeader }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    header: {
      type: String,
      required: true
    },
    subHeader: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

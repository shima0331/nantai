<template>
  <div>
    <p class="card-text name-text">{{ hinto }}</p>
  </div>
</template>
<script>
export default {
  props: {
    hinto: {
      type: String,
      default: ''
    }
  }
}
</script>

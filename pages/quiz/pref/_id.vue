<template>
  <section class="container">
    <h2>hello {{ $route.params.id }}</h2>
    {{ questions[question_index].city }}
    {{ questions[question_index].town }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      questions: this.$store.state.questions,
      question_index: this.$store.state.question_index
    }
  },
  fetch({ store, params }) {
    store.dispatch('shuffle', { pref: params.id })
  }
}
</script>

<style>
</style>

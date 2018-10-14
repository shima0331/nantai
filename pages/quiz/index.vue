<template>
  <section class="container">
    <div class="row">
      <br>
    </div>
    <div class="mx-auto text-center">
      <img src="logo.png" alt="Nandoku Tairiku" class="img-thumnail">
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 align-items-center">
        <nuxt-link :class="remainCount(14) > 0 ? 'btn btn-primary btn-block' : 'btn btn-primary btn-block disabled'" to="/quiz/pref/14" role="button" disabled="remainCount(14) == 0">神奈川県</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <nuxt-link :class="remainCount(22) > 0 ? 'btn btn-primary btn-block' : 'btn btn-primary btn-block disabled'" to="/quiz/pref/22" role="button" disabled="remainCount(22) == 0">静岡県</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <nuxt-link :class="remainCount(0) > 0 ? 'btn btn-primary btn-block' : 'btn btn-primary btn-block disabled'" to="/quiz/pref/0" role="button">ランダム</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <nuxt-link class="btn btn-primary btn-block" to="/" role="button">メニューへ</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <button class="btn btn-primary btn-block" @click="clear">データクリア</button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  methods: {
    remainCount: function(id) {
      var unanswereds = this.$store.state.quizzes.filter(
        quiz =>
          (id == 0 || id == quiz.pref) &&
          !this.$store.state.cards.includes(quiz.id)
      )
      return unanswereds.length
    },
    clear: function() {
      this.$store.dispatch('saveCards', [])
      this.$store.commit('setCards', [])
    }
  }
}
</script>

<style>
</style>

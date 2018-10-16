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
        <nuxt-link class="btn btn-primary btn-block badge-pill btn-lg" to="/quiz" role="button">スタート</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <nuxt-link class="btn btn-primary btn-block badge-pill btn-info" to="/collection" role="button">コレクション</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <nuxt-link class="btn btn-primary btn-block badge-pill btn-info" to="/usage" role="button">遊び方</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  mounted() {
    this.$store.dispatch('loadCards')
  }
}
</script>

<style>
</style>

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
        <a class="btn btn-primary btn-block" href="quiz/pref/14" role="button">神奈川県</a>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <a class="btn btn-primary btn-block" href="quiz/pref/22" role="button">静岡県</a>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 lign-items-center">
        <a class="btn btn-primary btn-block" href="quiz/pref/0" role="button">ランダム</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>

<template>
  <section class="container">
    <h2 class="aligh-center">難読大陸</h2>
    <div class="row justify-content-center">
      <div class="col-2 align-items-center">
        <a class="btn btn-primary" href="/quiz/index" role="button">スタート</a>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-2 lign-items-center">
        <a class="btn btn-primary" href="/collection/index" role="button">コレクション</a>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-2 lign-items-center">
        <a class="btn btn-primary" href="/usage/index" role="button">遊び方</a>
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

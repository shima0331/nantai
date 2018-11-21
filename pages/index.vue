<template>
  <section class="container">
    <div class="row">
      <br>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 align-items-center">
        <img class="w-100" src="logo.png" alt="Nandoku Tairiku">
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 align-items-center">
        <nuxt-link class="start_btn btn btn-primary btn-block badge-pill btn-lg" to="/quiz" role="button">スタート</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 lign-items-center">
        <nuxt-link class="collection_btn btn btn-primary btn-block badge-pill btn-info" to="/collection" role="button">コレクション</nuxt-link>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 lign-items-center">
        <b-btn v-b-modal.modal1 class="usage-btn btn btn-primary btn-block badge-pill btn-info">遊び方</b-btn>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <b-modal id="modal1" title="遊び方">
      <GameUsage/>
    </b-modal>
    <div class="row justify-content-center">
      <div class="col-6 lign-items-center">
        <b-btn v-b-modal.modal2 class="kiyaku-btn btn btn-primary btn-block badge-pill btn-info">利用規約</b-btn>
      </div>
    </div>
    <div class="row">
      <br>
    </div>
    <b-modal id="modal2" class ="modalk" title="利用規約">
      <KIYAKU/>
    </b-modal>
  </section>
</template>

<script>
import GameUsage from '~/components/game-usage.vue'
import KIYAKU from '~/components/kiyaku.vue'
export default {
  components: {
    GameUsage,
    KIYAKU
  },
  data() {
    return {
      showModal: false
    }
  },
  mounted() {
    this.$store.dispatch('loadCards')
  },
  layout: 'menu'
}
</script>
<style>
.start_btn {
  background-color: #036a9e;
}
.collection_btn,
.usage-btn {
  background-color: #1e98b9;
}
.kiyaku-btn {
  background-color: #1e98b9;
}
#modal2 {
  width: 100%;
}
</style>

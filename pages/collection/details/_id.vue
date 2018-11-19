<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <Card
        :rare="card[id].rare"
        :id="card[id].id"
        :pref="card[id].pref"
        :city="card[id].city"
        :town_yomi="card[id].town_yomi"
        :town="card[id].town"
        :map_img="card[id].map_img"
        :spot="card[id].spot"
        :spot_img="card[id].spot_img"
        :spot_guide="card[id].spot_guide"/>
      <br>
      <div align="center">
        <nuxt-link to="/collection/details/0"><button type="button" class="btn btn-primary">◀</button></nuxt-link>
        |
        <nuxt-link to="/collection/details/4"><button type="button" class="btn btn-primary">▶</button></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Index from '~/store/index.js'

export default {
  components: {
    Card
  },
  data() {
    return {
      id: this.$route.params.id,
      card: this.$store.getters.quizzes
    }
  }
}
</script>

<style>
</style>

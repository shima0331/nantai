<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <Card 
        :id="card[index].id"
        :pref="card[index].pref"
        :city="card[index].city"
        :town="card[index].town"
        :map_img="card[index].map_img"
        :spot="card[index].spot"
        :rare="card[index].rare"
        :spot_img="card[index].spot_img"
        :spot_guide="card[index].spot_guide"/>
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
      index: this.$route.params.id - 1,
      card: this.$store.getters.quizzes
    }
  }
}
</script>

<style>
</style>

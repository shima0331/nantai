<template>
  <section class="container">

    <div class="row">
      <div class="col-12 clearfix">
        <div class="float-left"><img src="logo.png" alt="Nandoku Tairiku"></div>
        <div class="col-xs-6">
          <h2>この地名の読み方、わかるかな</h2> 
        </div>
      </div>
    </div>
    <div v-if="type == 2">
      不正解
    </div> 
    <div v-if="type　== 0 || type == 2">
      {{ questions[question_index].city }}<b>{{ questions[question_index].town }}</b>
      <input v-model="yomi"><button @click="answer"><span v-if="type==0">回答</span><span v-if="type==2">再回答</span></button>
    </div>
    <div v-if="type　== 1">
      正解！カードをゲットしました
      <Card :id="card.id"/>
      <div v-if="questions.length != (question_index + 1)">        
        <button @click="next">別の問題をとく</button>
      </div>
      <nuxt-link :to="{name: 'quiz'}">
        <button>戻る</button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      questions: this.$store.state.questions,
      question_index: this.$store.state.question_index,
      yomi: '',
      type: 0,
      card: null
    }
  },
  fetch({ store, params }) {
    store.dispatch('shuffle', { pref: params.id })
  },
  methods: {
    answer: function(event) {
      // `this` inside methods point to the Vue instance
      var question = this.questions[this.question_index]
      if (question.town_yomi == this.yomi) {
        this.type = 1
        this.$store.state.cards.push(question.id)
        this.card = question
        this.$store.dispatch('saveCards', this.$store.state.cards)
        this.$store.commit('setCards', this.$store.state.cards)
      } else {
        this.type = 2
      }
    },
    next: function(event) {
      this.question_index++
      this.type = 0
      this.yomi = ''
    }
  }
}
</script>

<style>
</style>

<template>
  <section class="container">
    <div class="answer">
      <div class="row mb-2">
        <div class="col"/>
        <div class="col-10 text-center question-text">
          <span v-if="type==0">この地名の読み方、わかるかな</span><span v-if="type==1"><span class="correct-text">正解！</span>カードをゲットしました</span><span v-if="type==2"><span class="incorrect-text">不正解！</span>もう一度答えてみよう</span>
        </div>
        <div class="col"/>
      </div>
      <div v-if="type==0 || type==2" class="row text-center">
        <div class="col"/>
        <div class="col-6 location-panel mb-2">
          <div>
            <img :src="questions[question_index].map_img" > 
          </div>
          {{ questions[question_index].pref }}{{ questions[question_index].city }}<span class="town-text">{{ questions[question_index].town }}</span>
        </div>
        <div class="col"/>
      </div>
      <div v-if="type==0 || type==2" class="row text-center mb-2">
        <div class="col"/>
        <div class="col-6 justify-content-md-center">
          <b-form inline class="justify-content-center" @submit.prevent="answer">
            <b-input v-model="yomi" placeholder="ここに入力してね" class="answer-input w-50 mr-2" />
            <b-button type="submit" class="answer-btn badge-pill"><span v-if="type==0">回答</span><span v-if="type==2">再回答</span></b-button>
          </b-form>
        </div>
        <div class="col"/>
      </div>
      <div v-if="type==0 || type==2" class="row clearfix">
        <div class="col"/>
        <div class="col-5 text-right">
          <b-button class="other-btn badge-pill" @click="next">別の問題に挑戦</b-button>
        </div>
        <div class="col-5">
          <b-button class="hint-btn badge-pill" @click="hint">ヒントをみる</b-button>
        </div>

        <div class="col"/>
      </div>
      <div v-if="type==1">
        <div class="row justify-content-center">
          <div class="col-1"/>
          <div class="col-5">
            <Card :id="card.id" :pref="card.pref" :city="card.city" :town="card.town" :map_img="card.map_img" :spot="card.spot" :spot_img="card.spot_img" :spot_guide="card.spot_guide"/>
          </div>
          <div class="col-6">
            <div v-if="questions.length != (question_index + 1)">        
              <b-button @click="next">別の問題をとく</b-button>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
    <div class="row mt-2">
      <div class="col-6"/>
      <div class="text-right">
        <nuxt-link v-if="type!=1" to="/quiz" class="return-btn btn badge-pill">都道府県選択へ戻る</nuxt-link>
        <nuxt-link v-if="type==1" to="/" class="return-btn btn badge-pill">トップへ戻る</nuxt-link>
      </div>
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
    store.dispatch('shuffle', { pref_id: params.id })
  },
  methods: {
    answer: function() {
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
        this.yomi = ''
      }
    },
    next: function() {
      this.question_index++
      this.type = 0
      this.yomi = ''
    }
  }
}
</script>

<style>
.answer {
  background-color: #efffff;
} /* 左右余白 */
.location-panel {
  background-color: #ffffff;
}
.question-text {
  font-size: 20px;
  color: #534741;
}
.incorrect-text {
  color: #036a9e;
}
.correct-text {
  color: #e06a3b;
}
.town-text {
  font-size: 30px;
  color: #e06a3b;
} /* 左右余白 */
.answer-input,
.answer-input:focus {
  outline: 0;
  border-width: 2px;
  border-color: #036a9e;
}
.answer-btn {
  color: white;
  background-color: #036a9e;
} /* 左右余白 */
.other-btn,
.hint-btn,
.return-btn {
  color: white;
  background-color: #1e98b9;
} /* 左右余白 */
</style>

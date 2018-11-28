<template>
  <section class="container">
    <div class="answer">
      <div class="col"/>&nbsp;
      <div class="row justify-content-center">
        <div class="col-5">
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
        </div>
        <div class="col-md-5 mt-1">
          <a href="https://www.facebook.com/sharer/sharer.php?u=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="facebook-b.png"></a>
          <a href="http://twitter.com/share?url=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="twitter-b.png"></a>
          <a href="https://social-plugins.line.me/lineit/share?url=http://nantai.metro.co.jp" target="_blank"><img class="social-btn" src="line-b.png"></a>
          <div class="col-6 mt-1">
            <nuxt-link :to="'/collection/' + link" class="collection-btn badge-pill btn" role="button"><b>コレクションをみる</b></nuxt-link>
          </div>
          <div class="col-6 mt-1">
            <a :href="'https://google.co.jp/search?q=' + card.pref + card.city + card.town" target="_blank" class="google-btn badge-pill btn" role="button"><b>Google検索</b></a>
          </div>
        </div>
      </div>
      <div class="col"/>&nbsp;
    </div>
    <br>
    <div class="row justify-content-center">
      <div align="center">
        <nuxt-link :to="'/collection/details/' + prev"><button type="button" class="btn btn-primary">◀</button></nuxt-link>
        |
        <nuxt-link :to="'/collection/details/' + next"><button type="button" class="btn btn-primary">▶</button></nuxt-link>
      </div>
    </div>
  </section>
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
  },
  computed: {
    // 算出 getter 関数
    // `this` は vm インスタンスを指します
    prev: function() {
      var quiz = this.$store.getters.quizzes
      var length1 = quiz.length
      var card = this.$store.getters.cards
      var length2 = card.length
      var cnt = Number(this.$route.params.id)
      var pcnt = Number(this.$route.params.id)
      var pcnt2 = 0
      for (var i = 1; i < length1; i++) {
        for (var j = 0; j < length2; j++) {
          if (pcnt > 0) {
            if (card[j].id == quiz[pcnt - i].id) {
              return card[j].id - 1
            }
          }
        }
      }
      return cnt
    },
    next: function() {
      var quiz = this.$store.getters.quizzes
      var length1 = quiz.length
      var card = this.$store.getters.cards
      var length2 = card.length
      var cnt = Number(this.$route.params.id)
      var pcnt = Number(this.$route.params.id)
      var pcnt2 = length1 - cnt
      for (var i = 1; i < pcnt2; i++) {
        for (var j = 0; j < length2; j++) {
          if (pcnt < length1) {
            if (card[j].id == quiz[pcnt + i].id) {
              return card[j].id - 1
            }
          }
        }
      }
      return cnt
    },
    link: function() {
      var cnt = Number(this.$route.params.id)
      return Math.floor(cnt / 10) + 1
    }
  }
}
</script>

<style>
.answer {
  background-color: #efffff;
} /* 左右余白 */
.question-text {
  font-size: 20px;
  color: #534741;
}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 5;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
</style>

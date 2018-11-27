<template>
  <section class="container">
    <table class="table table-secondary">
      <tr>
        <td colspan="2">
          <h1>&nbsp;Collection&nbsp;達成率 {{ ritu }} %</h1>
        </td>
      </tr>
      <tr>
        <td width="80px">&nbsp;
        </td>
        <td>
          <br>
          <!-- 1行目 -->
          <div class="row">
            <!-- cardsのデータをindex 0~3まで表示 --><!-- ※Page番号とIndexで算出 -->
            <div v-for="n in 5" :key="n">
              <div v-if="remaining(n + icnt)=='Z'">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card border-0" style="width: 10rem;height: 14rem; background-color: transparent;border: border-none;">
                      <div class="card-body">
                        <p class="card-text">&nbsp;</p>
                        <h4 class="card-title">&nbsp;</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="remaining(n + icnt)=='Y'">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card" style="width: 10rem;height: 14rem;">
                      <div class="card-body">
                        <p class="card-text">&nbsp;</p>
                        <h3><p class="card-title">NO PHOTO</p></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="col-12">
                  <div class="card-deck">
                    <nuxt-link :to="'/collection/details/' + Number(n + icnt - 1)" class="card" style="width: 10rem;height: 14rem;">
                      <div class="card-body">
                        <p class="card-text mb-1" align="right"><small class="text-dark">{{ "⭐ ".repeat(quizzes[n + icnt - 1].rare) }}No.{{ quizzes[n + icnt - 1].id }}</small></p>
                        <p class="card-text mb-1 text-dark" style="fontSize :60%;">{{ quizzes[n + icnt - 1].town_yomi }}</p>
                        <div v-if="quizzes[n + icnt - 1].town.length > 5">
                          <h6><p class="card-title text-dark">{{ quizzes[n + icnt - 1].town }}</p></h6>
                        </div>
                        <div v-else>
                          <h5><p class="card-title text-dark">{{ quizzes[n + icnt - 1].town }}</p></h5>
                        </div>
                        <small class="text-dark" style="fontSize :60%;">{{ quizzes[n + icnt - 1].spot }}</small>
                        <img :src="quizzes[n + icnt - 1].spot_img" class="card-img-bottom" alt="Card image cap">
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <!-- 2行目 -->
          <div class="row">
            <div v-for="n in 5" :key="n">
              <div v-if="remaining(n + 5 + icnt)=='Z'">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card border-0" style="width: 10rem;height: 14rem; background-color: transparent;border: border-none;">
                      <div class="card-body">
                        <p class="card-text">&nbsp;</p>
                        <h3><p class="card-title">&nbsp;</p></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="remaining(n + 5 + icnt)=='Y'">
                <div class="col-12">
                  <div class="card-deck">
                    <div class="card" style="width: 10rem; height: 14rem;">
                      <div class="card-body">
                        <p class="card-text">&nbsp;</p>
                        <h3><p class="card-title">NO PHOTO</p></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="col-12">
                  <div class="card-deck">
                    <nuxt-link :to="'/collection/details/' + Number(n + icnt + 4)" class="card" style="width: 10rem;height: 14rem;">
                      <div class="card-body">
                        <p class="card-text mb-1" align="right"><small class="text-dark">{{ "⭐ ".repeat(quizzes[n + icnt + 4].rare) }}No.{{ quizzes[n + icnt + 4].id }}</small></p>
                        <p class="card-text mb-1 text-dark" style="fontSize :60%;">{{ quizzes[n + icnt + 4].town_yomi }}</p>
                        <div v-if="quizzes[n + icnt + 4].town.length > 5">
                          <h6><p class="card-title text-dark">{{ quizzes[n + icnt + 4].town }}</p></h6>
                        </div>
                        <div v-else>
                          <h5><p class="card-title text-dark">{{ quizzes[n + icnt + 4].town }}</p></h5>
                        </div>
                        <small class="text-dark" style="fontSize :60%;">{{ quizzes[n + icnt + 4].spot }}</small>
                        <img :src="quizzes[n + icnt + 4].spot_img" class="card-img-bottom" alt="Card image cap">
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
        </td>
      </tr>
    </table>
    <div align="center">
      <nuxt-link :to="'/collection/' + prev"><button type="button" class="btn btn-primary">◀</button></nuxt-link>
      |
      <nuxt-link :to="'/collection/' + next"><button type="button" class="btn btn-primary">▶</button></nuxt-link>
      &nbsp;
      <nuxt-link v-for="x in pcnt2" :key="x" :to="'/collection/' + x">
        <button v-if="now==x" type="button" class="btn btn-primary">{{ x }}</button>
        <button v-else type="button" class="btn btn-link">{{ x }}</button>
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
      card: null,
      quizzes: this.$store.getters.quizzes,
      id: this.$route.params.id,
      now: this.$route.params.id,
      pcnt: this.$store.getters.quizzes.length
    }
  },
  computed: {
    // 算出 getter 関数
    // `this` は vm インスタンスを指します
    icnt: function() {
      var id = this.$route.params.id
      return (id - 1) * 10
    },
    pcnt2: function() {
      // `this` は vm インスタンスを指します
      return Math.ceil(this.pcnt / 10)
    },
    ritu: function() {
      var plen = this.$store.getters.quizzes.length
      var clen = this.$store.getters.cards.length
      return Math.round((clen / plen) * 100)
    },
    prev: function() {
      var id = Number(this.$route.params.id)
      if (id > 1) {
        return id - 1
      } else {
        return id
      }
    },
    next: function() {
      var id = Number(this.$route.params.id)
      var max = Math.ceil(this.pcnt / 10)
      if (id == max) {
        return id
      } else {
        return id + 1
      }
    }
  },
  methods: {
    remaining: function(cnt) {
      var card = this.$store.getters.cards
      var length = card.length
      var plength = this.$store.getters.quizzes.length
      if (cnt > plength) {
        return 'Z'
      }
      for (var i = 0; i < length; i++) {
        if (cnt == card[i].id) {
          return cnt
        }
      }
      return 'Y'
    }
  }
}
</script>

<style>
#mapTbl {
  border-collapse: collapse; /* 隣接する枠線を重ねる */
  text-align: center; /* 文字水平位置 */
  vertical-align: middle; /* 垂直位置 */
  font-size: 20px; /* 文字サイズ */
  background-color: #efffff; /* 表 背景色 */
  border: 1px solid aqua; /* 表 枠線 */
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

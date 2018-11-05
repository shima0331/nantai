<template>
  <section class="container">
    <!-- 1行目 -->
    <div class="row">
      <!-- cardsのデータをindex 0~3まで表示 --><!-- ※Page番号とIndexで算出 -->
      <div v-for="(n,index) in this.$store.getters.cards" v-if="index<4" :key="n">
        <div class="col-8">
          <div class="card-deck">
            <a :href="'/collection/' + n.id" class="card" style="width: 15rem;">
              <div class="card-body">
                <p class="card-text"><small class="text-muted">No.{{ n.id }}</small></p>
                <p class="card-text">{{ n.town_yomi }}</p>
                <h4 class="card-title">{{ n.town }}</h4>
              </div>
              <!-- ※仮 -->
              <img class="card-img-top" src="~/static/spot/1.jpg" alt="Card image cap">
            </a>
          </div>
        </div>
      </div>
    </div>
    <br>
    <!-- 2行目 -->
    <div class="row">
      <!-- cardsのデータをindex 4~7まで表示 -->
      <div v-for="(n,index) in this.$store.getters.cards" v-if="3<index && index<8" :key="n">
        <div class="col-8">
          <div class="card-deck">
            <a :href="'/collection/' + n.id" class="card" style="width: 15rem;">
              <div class="card-body">
                <p class="card-text"><small class="text-muted">No.{{ n.id }}</small></p>
                <p class="card-text">{{ n.town_yomi }}</p>
                <h4 class="card-title">{{ n.town }}</h4>
              </div>
              <!-- ※仮 -->
              <img class="card-img-top" src="~/static/spot/1.jpg" alt="Card image cap">
            </a>
          </div>
        </div>
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
    column-count: 4;
  }
}
</style>

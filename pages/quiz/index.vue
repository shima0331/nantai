<template>
  <section class="container">
    <img id="map" src="japanmap/JapanMap.png" usemap="#JapanMap" alt="" class="col-12" height="667px">
    <map id="JapanMap" name="JapanMap">
      <nuxt-link v-if="remainCount(22) > 0" to="/quiz/pref/22">
        <area title="静岡" shape="rect" coords="391,455,445,495"
              alt="静岡" @mouseover="remainCount(22) > 0 ? cImg(22) : cImg(99)" @mouseout="cImg(99)">
      </nuxt-link>
      <nuxt-link v-if="remainCount(14) > 0" to="/quiz/pref/14">
        <area title="神奈川" shape="rect" coords="447,454,512,486"
              alt="神奈川" @mouseover="remainCount(14) > 0 ? cImg(14) : cImg(99)" @mouseout="cImg(99)">
      </nuxt-link>
      <nuxt-link v-if="remainCount(0) > 0" to="quiz/pref/0">
        <area title="ランダム" shape="circle" coords="82,262,36" 
              alt="ランダム" @mouseover="remainCount(0) > 0 ? cImg(0) : cImg(99)" @mouseout="cImg(99)">
      </nuxt-link>
    </map>
    <div class="row"><br></div>
    <div class="row">
      <button class="btn btn-primary " valign="top" @click="clear">データクリア</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    cImg: function(id) {
      var imgEle = document.getElementById('map')
      imgEle.src = 'japanmap/JapanMap' + id + '.png'
    },
    remainCount: function(pref_id) {
      var unanswereds = this.$store.state.quizzes.filter(
        quiz =>
          (pref_id == 0 || pref_id == quiz.pref_id) &&
          !this.$store.state.cards.includes(quiz.id)
      )
      return unanswereds.length
    },
    clear: function() {
      this.$store.dispatch('saveCards', [])
      this.$store.commit('setCards', [])
    }
  }
}
</script>

<style>
.col-12 {
  flex: 0 0 100%;
  max-width: 617px;
}
</style>

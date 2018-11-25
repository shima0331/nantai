<template>
  <section class="container">
    <div class="row">
      <div class="col map-parent">
        <img id="map" src="japanmap/JapanMap.png" usemap="#image-map" alt="">
        <map name="image-map">
          <nuxt-link v-if="remainCount(22) > 0" to="/quiz/pref/22">
            <area title="静岡" shape="rect" coords="391,455,445,495"
                  alt="静岡" @mouseover="remainCount(22) > 0 ? cImg(22) : cImg(99)" @mouseout="cImg(99)">
          </nuxt-link>
          <nuxt-link v-if="remainCount(14) > 0" to="/quiz/pref/14">
            <area title="神奈川" shape="rect" coords="447,454,512,486"
                  alt="神奈川" @mouseover="remainCount(14) > 0 ? cImg(14) : cImg(99)" @mouseout="cImg(99)">
          </nuxt-link>
          <nuxt-link v-if="remainCount(0) > 0" to="/quiz/pref/0">
            <area title="ランダム" shape="circle" coords="82,262,36" 
                  alt="ランダム" @mouseover="remainCount(0) > 0 ? cImg(0) : cImg(99)" @mouseout="cImg(99)">
          </nuxt-link>
        </map>
      </div>
    </div>
    <div class="row"><br></div>
    <div class="row">
      <button class="btn btn-primary " valign="top" @click="clear">データクリア</button>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
export default {
  created() {
    $(function() {
      var image_is_loaded = false
      $('#map').on('load', function() {
        if (!image_is_loaded) {
          $('area').each(function() {
            $(this).data('coords', $(this).attr('coords'))
          })
          image_is_loaded = true
        }
      })

      function ratioCoords(coords, ratio) {
        var coord_arr = coords.split(',')
        for (var i = 0; i < coord_arr.length; i++) {
          coord_arr[i] = Math.round(ratio * coord_arr[i])
        }
        return coord_arr.join(',')
      }
      $(window).on('resize', function() {
        if (image_is_loaded) {
          var img = $('#map')
          var ratio = img.width() / 617

          $('area').each(function() {
            $(this).attr('coords', ratioCoords($(this).data('coords'), ratio))
          })
        }
      })
    })
  },
  methods: {
    cImg: function(id) {
      var imgEle = document.getElementById('map')
      imgEle.src = 'japanmap/JapanMap' + id + '.png'
    },
    remainCount: function(pref_id) {
      var unanswereds = this.$store.state.quizzes.filter(
        quiz =>
          (pref_id == 0 || pref_id == quiz.pref_id) &&
          !this.$store.state.cards.find(function(e) {
            return e.id == quiz.id
          })
      )
      return unanswereds.length
    },
    clear: function() {
      this.$store.dispatch('ClearCards', [])
      this.$store.commit('setCards', [])
    }
  }
}
</script>

<style>
#map {
  width: 100%;
  height: auto;
}
.map-parent {
  max-width: 617px;
  max-height: 667px;
}
</style>

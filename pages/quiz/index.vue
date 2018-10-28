<template>
  <section class="container">
    <table id="mapTbl">
      <tr>
        <td colspan="2" rowspan="34" class="leftRight"/>
        <td colspan="31" class="topBottom"/>
        <td class="leftRight"/>
      </tr>
      <tr>
        <td colspan="21" rowspan="2">
          <div class="mx-auto text-center">
            <nuxt-link to="/">
              <img src="logo.png" alt="Nandoku Tairiku" class="img-thumnail"
                   align="left" width="25%">
            </nuxt-link>
          </div>
        </td>
        <td rowspan="8" colspan="2"/>
        <td colspan="8" rowspan="2" title="北海道">
        <a class="hokka btn disabled">北海道</a></td>
        <td height="24" rowspan="3"/>
      </tr>
      <tr/>
      <tr>
        <td class="kaikyo" colspan="21"/>
        <td class="kaikyo" colspan="5"/>
        <td class="kaikyo" colspan="3" style="width : 2em;"/>
      </tr>
      <tr>
        <td colspan="21"/>
        <td colspan="5" style="height : 2.5em;" title="青森">
        <a class="tohoku btn disabled">青森</a></td>
        <td rowspan="30" colspan="3"/>
        <td/>
      </tr>
      <tr>
        <td colspan="5">
          <nuxt-link :class="remainCount(0) > 0 ? 'btn btn-primary ' : 'btn btn-primary disabled'" to="/quiz/pref/0" role="button">ランダム</nuxt-link>
        </td>
        <td colspan="16"/>
        <td rowspan="2" colspan="2" title="秋田">
        <a class="tohoku btn disabled">秋<br>田</a></td>
        <td rowspan="2" colspan="3" title="岩手">
        <a class="tohoku btn disabled">岩<br>手</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="5">
          <nuxt-link class="btn btn-primary " to="/" role="button">メニューへ</nuxt-link>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <button class="btn btn-primary " valign="top" @click="clear">データクリア</button>
        </td>
        <td colspan="11" rowspan="6"/>
        <td/>
        <td colspan="4" rowspan="2"/>
        <td rowspan="2" colspan="2" title="山形">
        <a class="tohoku btn disabled">山<br>形</a></td>
        <td rowspan="2" colspan="3" title="宮城">
        <a class="tohoku btn disabled">宮<br>城</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="5" rowspan="5"/>
        <td rowspan="6" title="石川">
        <a class="hokuriku btn disabled">石<br>川</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="2"/>
        <td colspan="5" title="新潟" rowspan="3">
        <a class="kosinetu btn disabled">新潟</a></td>
        <td rowspan="4" colspan="4" title="福島">
        <a class="tohoku btn disabled">福島</a></td>
        <td rowspan="3"/>
      </tr>
      <tr>
        <td colspan="2" title="富山" rowspan="3">
        <a class="hokuriku btn disabled">富山</a></td>
      </tr>
      <tr/>
      <tr>
        <td rowspan="8" title="長野">
        <a class="kosinetu btn disabled">長野</a></td>
        <td colspan="4" rowspan="4" title="群馬">
        <a class="kanto btn disabled">群馬</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="7"/>
        <td colspan="8"/>
        <td/>
        <td colspan="2" rowspan="7" title="岐阜">
        <a class="cyuubu btn disabled">岐<br>阜</a></td>
        <td colspan="2" rowspan="3" title="栃木">
        <a class="kanto btn disabled">栃木</a></td>
        <td colspan="2" rowspan="4" title="茨城">
        <a class="kanto btn disabled">茨<br>城</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="7" rowspan="3"/>
        <td colspan="8"/>
        <td colspan="2" rowspan="2" title="福井">
        <a class="hokuriku btn disabled">福井</a></td>
        <td/>
      </tr>
      <tr>
        <td rowspan="5" title="山口">
        <a class="tyugoku btn disabled">山<br>口</a></td>
        <td rowspan="4" title="島根">
        <a class="tyugoku btn disabled">島根</a></td>
        <td rowspan="4" title="鳥取">
        <a class="tyugoku btn disabled">鳥取</a></td>
        <td colspan="3" rowspan="6" title="兵庫">
        <a class="kinki btn disabled">兵庫</a></td>
        <td colspan="2"/>
        <td/>
      </tr>
      <tr>
        <td colspan="3" rowspan="4" title="京都">
        <a class="kinki btn disabled">京都</a></td>
        <td rowspan="4" title="滋賀">
        <a class="kinki btn disabled">滋<br>賀</a></td>
        <td colspan="6" rowspan="3" title="埼玉">
        <a class="kanto btn disabled">埼玉</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="7" rowspan="2"/>
        <td colspan="2" rowspan="5" style="padding:0px 4px;" title="千葉">
        <a class="kanto btn disabled">千<br>葉</a></td>
        <td rowspan="2"/>
      </tr>
      <tr/>
      <tr>
        <td rowspan="4" title="長崎">
        <a class="kyusyu btn disabled">長<br>崎</a></td>
        <td rowspan="3" title="佐賀">
        <a class="kyusyu btn disabled">佐<br>賀</a></td>
        <td rowspan="2" colspan="3" title="福岡">
        <a class="kyusyu btn disabled">福岡</a></td>
        <td/>
        <td/>
        <td rowspan="2" title="広島">
        <a class="tyugoku btn disabled">広島</a></td>
        <td rowspan="2" title="岡山">
        <a class="tyugoku btn disabled">岡山</a></td>
        <td colspan="3" title="山梨">
        <a class="kosinetu btn disabled">山梨</a></td>
        <td colspan="3" title="東京">
        <a class="kanto btn disabled">東京</a></td>
        <td/>
      </tr>
      <tr>
        <td colspan="3"/>
        <td colspan="2" rowspan="4" title="大阪">
        <a class="kinki btn disabled">大<br>阪</a></td>
        <td rowspan="4" title="奈良">
        <a class="kinki btn disabled">奈<br>良</a></td>
        <td rowspan="5" title="三重">
        <a class="kinki btn disabled">三<br>重</a></td>
        <td colspan="2" rowspan="2" title="愛知">
        <a class="cyuubu btn disabled">愛知</a></td>
        <td colspan="3" rowspan="3" title="静岡">
          <nuxt-link :class="remainCount(22) > 0 ? 'cyuubu btn ' : 'cyuubu btn disabled'" to="/quiz/pref/22" role="button" disabled="remainCount(22) == 0">静岡</nuxt-link>
        </td>
        <td colspan="3" rowspan="2" title="神奈川">
          <nuxt-link :class="remainCount(14) > 0 ? 'kanto btn ' : 'kanto btn disabled'" to="/quiz/pref/14" role="button" disabled="remainCount(14) == 0">神奈川</nuxt-link>
        </td>
        <td rowspan="2"/>
        <td/>
      </tr>
      <tr>
        <td rowspan="2"/>
        <td rowspan="6" style="padding:0px 4px;" title="熊本">
        <a class="kyusyu btn disabled">熊<br>本</a></td>
        <td rowspan="2" title="大分">
        <a class="kyusyu btn disabled">大分</a></td>
        <td colspan="8" rowspan="2"/>
        <td/>
      </tr>
      <tr>
        <td/>
        <td colspan="2" title="愛知"/>
        <td colspan="2"/>
        <td/>
        <td/>
        <td colspan="2"/>
        <td/>
      </tr>
      <tr>
        <td colspan="3" rowspan="9"/>
        <td rowspan="4" title="宮崎">
        <a class="kyusyu btn disabled">宮崎</a></td>
        <td colspan="2" rowspan="3"/>
        <td colspan="2" title="愛媛">
        <a class="sikoku btn disabled">愛媛</a></td>
        <td colspan="3" title="香川">
        <a class="sikoku btn disabled">香川</a></td>
        <td rowspan="3"/>
        <td rowspan="10" colspan="11"/>
        <td/>
      </tr>
      <tr>
        <td colspan="2" rowspan="2" title="高知">
        <a class="sikoku btn disabled">高知</a></td>
        <td colspan="3" rowspan="2" title="徳島">
        <a class="sikoku btn disabled">徳島</a></td>
        <td colspan="3" rowspan="4" title="和歌山">
        <a class="kinki btn disabled">和歌山</a></td>
        <td/>
      </tr>
      <tr>
        <td rowspan="8"/>
        <td rowspan="9"/>
      </tr>
      <tr>
        <td colspan="8" rowspan="6"/>
      </tr>
      <tr>
        <td colspan="2" rowspan="4" style="height : 2.5em;" title="鹿児島">
        <a class="kyusyu btn disabled">鹿児島</a></td>
      </tr>
      <tr>
        <td colspan="3" rowspan="5"/>
      </tr>
      <tr/>
      <tr/>
      <tr>
        <td colspan="2"/>
      </tr>
      <tr>
        <td colspan="2" title="沖縄">
        <a class="kyusyu btn disabled">沖縄</a></td>
        <td/>
        <td colspan="2"/>
        <td colspan="6"/>
        <td/>
        <td/>
      </tr>
      <tr>
        <td colspan="28" class="topBottom"/>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  methods: {
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
#mapTbl {
  border-collapse: collapse; /* 隣接する枠線を重ねる */
  text-align: center; /* 文字水平位置 */
  vertical-align: middle; /* 垂直位置 */
  font-size: 20px; /* 文字サイズ */
  background-color: #efffff; /* 表 背景色 */
  border: 1px solid aqua; /* 表 枠線 */
}

#mapTbl tr {
  height: 0.4em;
} /* 行の高さ */

#mapTbl tr td {
  border: 1px solid #efffff; /* セル 枠線 */
}

#mapTbl td {
  height: 100%;
}

#mapTbl td a {
  display: block;
  width: 100%;
  height: 100%;
}

#mapTbl a:hover {
  background-color: #ffffcc;
}

#mapTbl a.btn {
  padding: 0;
}

.hokka {
  /* 北海道 */
  height: 7em;
  background-color: #8cffa9; /* 各地方の背景色 */
  cursor: pointer; /* マウスカーソルの形状 */
}

.tohoku {
  /* 東北 */
  background-color: #9bdeff;
  cursor: pointer;
}

.kanto {
  /* 関東 */
  background-color: #fa8072;
  cursor: pointer;
}

.hokuriku {
  /* 北陸 */
  background-color: #ff9966;
  cursor: pointer;
}

.kosinetu {
  /* 甲信越 */
  background-color: #ff99ff;
  cursor: pointer;
}

.cyuubu {
  /* 中部 */
  background-color: #cc99ff;
  cursor: pointer;
}

.kinki {
  /* 近畿 */
  background-color: fuchsia;
  cursor: pointer;
}
.tyugoku {
  /* 中国 */
  background-color: #add8e6;
  cursor: pointer;
}

.sikoku {
  /* 四国 */
  background-color: #90ee90;
  cursor: pointer;
}

.kyusyu {
  /* 九州、沖縄 */
  background-color: #ffbd9a;
  cursor: pointer;
}

.kaikyo {
  height: 1em;
} /* 津軽海峡 */

.topBottom {
  height: 2em;
} /*外枠と地図の 上下余白 */

.leftRight {
  width: 2em;
} /* 左右余白 */
</style>

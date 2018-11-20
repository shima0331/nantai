<template>
  <div class="sf-site-all">
    <div class="sf-site-content">      
      <div class="row clearfix mt-3">
        <div class="col-1"/>
        <div class="col-2">
          <nuxt-link to="/">
            <img src="logo.png" class="left">
          </nuxt-link>
        </div>
        <div class="col mt-3">
          <nuxt-link class="btn" to="/" role="button"><b>トップ</b></nuxt-link>
          <nuxt-link class="btn" to="/quiz" role="button"><b>クイズに挑戦</b></nuxt-link>
          <nuxt-link class="btn" to="/collection/1" role="button"><b>コレクション</b></nuxt-link>
        </div>
      </div>
      <br>
      <nuxt/>
      <br>
      <Copyright/>
    </div>
    <Bottom/>
  </div>
</template>

<script>
import Copyright from '~/components/Copyright.vue'
import Bottom from '~/components/Bottom.vue'
export default {
  components: {
    Copyright,
    Bottom
  },
  head: {
    bodyAttrs: {
      style: 'background: linear-gradient(#4cb5f5, #ceeefa);'
    }
  }
}
</script>
<style>
img {
  width: 100px;
}
.sf-site-all {
  min-height: 100vh; /* 全体の高さを最低でもビューポートの100%にする */
  display: flex; /* 子クラスを横並びにする */
  flex-direction: column; /* 子クラスの横並びの方向を縦にする */
}
.sf-site-content {
  flex: 1; /* flexに1つだけ数値を指定するとその要素は伸びる */
}
.btn {
  color: white;
  border-color: white;
  border-width: 2px;
}
</style>

<template>
  <div class="sf-site-all">
    <div class="sf-site-content">
      <nuxt/>
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
      style: 'background-color:#CAF0FB;'
    }
  }
}
</script>
<style>
.sf-site-all {
  min-height: 100vh; /* 全体の高さを最低でもビューポートの100%にする */
  display: flex; /* 子クラスを横並びにする */
  flex-direction: column; /* 子クラスの横並びの方向を縦にする */
}
.sf-site-content {
  flex: 1; /* flexに1つだけ数値を指定するとその要素は伸びる */
}
</style>

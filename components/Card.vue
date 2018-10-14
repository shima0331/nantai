<template>
  <div class="card">
    <div class="card-header">
      No.{{ id }}
    </div>
    <img class="card-img" src="cardbackground.png" alt="Card">
    <div class="card-img-overlay">
      <div class="card-body">
        <br>
        <h6 class="card-title">ぬまづしひがししいじ</h6>
        <h5 class="card-title">沼津市東椎路</h5>
        <p class="card-text">[観光情報]空海ラーメン</p>
        <img class="card-img-bottom" src="http://livedoor.blogimg.jp/miyadara/imgs/4/8/48c9352e.jpg" alt="Card image">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style>
</style>

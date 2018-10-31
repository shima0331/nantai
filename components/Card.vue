<template>
  <b-card>
    <p class="card-text mb-1" align="right">{{ "⭐ ".repeat(rare) }}No.{{ id }}</p>
    <p class="card-text name-text">{{ pref + city + town }}<b-card-img :src="map_img" alt="Image" class="map_img" fluid="false" /></p>
    <b-card-img :src="spot_img" alt="Image" bottom/>
    <div class="spot">
      <p class="card-text mb-1">{{ spot }}</p>
      <div style="white-space:pre;height:100px;overflow:auto;border:1px solid #aaa;padding:10px;">{{ spot_guide }}</div>
    </div>
  </b-card>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    pref: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    town: {
      type: String,
      default: ''
    },
    spot_img: {
      type: String,
      default: ''
    },
    map_img: {
      type: String,
      default: ''
    },
    rare: {
      type: Number,
      default: 1
    },
    spot: {
      type: String,
      default: ''
    },
    spot_guide: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
.spot {
  backgroud-color: yellow;
}
b-card {
  backgroud-color: gray;
}
.name-text {
  font-size: 20px;
  color: #534741;
}
.map_img {
  width: 30px;
}
</style>

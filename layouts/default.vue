<template>
  <div>
    <ul class="navbar-xs" >
      <br>
    </ul>
    <nuxt/>
    <footer class="page-footer text-center text-info">
      Copyright © Metro, Inc. 2018
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      style: 'background-color:#CAF0FB;'
    }
  }
}
</script>
<style>
.navbar-xs {
  min-height: 32px;
  height: 32px;
  background-color: #3086ab;
}
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* 隐藏所有滚动条 */
::-webkit-scrollbar {
  display: none;
}
</style>
  
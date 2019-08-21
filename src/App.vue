<template>
  <div id="app">
    <!-- <keep-alive> -->
    <transition name="van-slide-right" mode="out-in">
      <router-view />
    </transition>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
*{margin:0;padding:0;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

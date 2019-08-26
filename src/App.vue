<template>
  <div id="app">
    <!-- <keep-alive> -->
    <transition name="fade">
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
.fade-enter,
.fade-leave-to {
  transform: translateX(0%);
}
.fade-leave-active,
.fade-enter-active {
transition: all 0.5s;
transform: translateX(-100%);
}
*{margin:0;padding:0;}
#app {
  font-family: "微软雅黑", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

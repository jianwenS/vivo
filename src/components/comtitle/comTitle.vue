<template>
    <div>
      <!-- nav -->
      <van-sticky :offset-top="0">
        <van-nav-bar :title="text"  left-arrow>
          <van-icon name="wap-nav" slot="left" @click="goHome"/>
          <van-icon name="search" slot="right" @click="goSearch"/>
          <van-icon name="idcard" slot="right" @click="goSearch"/>
        </van-nav-bar>
      </van-sticky>
    </div>
</template>

<script>
export default {
    props: {
      text:[String]
    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
    },
    watch: {

    },
    methods: {
      goSearch () {
        this.$router.push('/search')
      },
      goHome () {
        this.$router.push('/')
      }
    },
    components: {
    
    },
};
</script>

<style scoped lang="scss">
  .van-nav-bar{background:rgb(0,0,0);width:100%;}
  .van-sticky--fixed .van-nav-bar{background:#000000;}
  .van-nav-bar .van-icon,.van-nav-bar__title{color:#ffffff;font-size:20px;}
  .van-icon-search{margin-right:0.3rem;}
</style>

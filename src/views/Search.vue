<template>
  <div>
    <transition name="van-slide-up">
      <div class="search" size="30px" v-show="a">
        <van-icon name="cross" class="cross" @click="goBack"/>
        <van-search class="search-text"
          background="#f2f2f2"
          placeholder="请输入搜索关键词"
          show-action
          clearable
          v-model="value"
          shape="round"
          @search="onSearch"
        >
          <van-icon slot="action" name="cart-o"  class="cart-o"/>
        </van-search>
      </div>
    </transition>
    <p @click="sas" class="a">125255221121</p>
      <van-list class="search-list">
      <van-cell :value="item.name" is-link to="/" v-for="(item, i) in searchList" :key="i"/>
      </van-list>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
    props: {

    },
    data() {
        return {
          value:'',
          searchList:[],
          a:false
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
      async onSearch () {
        let { search } = await api.postSearch('/search',this.value)
        this.searchList = search
      },
      goBack () {
        this.$router.go(-1)
      },
      sas () {
        this.a = !this.a 
        console.log(this.a)
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.v-enter,.v-leave-to{
  opacity:0;
}
.v-enter-active,.v-leave-active{
   transition: opacity .5s;
}
.a{margin-top:200px;}
.search{
  display:flex;
  padding:0 20px;
  height:70px;
  align-items:center;
  background:#f2f2f2;

  .cross,.cart-o{
    font-size:17px;
    width:20px;
    height:20px;
  }
  .search-text{
    flex:1;
  }

  .van-search__content{
    background:#ffffff;
    border:1px solid #eeeeee;
  }
}
.search-list{
    position: fixed;
    top: 70px;
    left: 0;
    overflow: auto;
    height: 100%;
    width: 100%;
    padding-bottom:40px;
    box-sizing:border-box;
}

</style>

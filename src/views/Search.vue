<template>
  <div>
      <div class="search" size="30px">
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
      <van-list class="search-list" v-if="isList">
         <van-cell value="暂无数据"/>
      </van-list>
      <van-list class="search-list" v-else>
      <van-cell :value="item.name" is-link  v-for="(item, i) in searchList" :key="i"/>
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
          isList: false
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
        if(this.value == "") {
          this.isList = true
          return false;
        }
        this.isList = false
        let { search } = await api.postSearch('/search',this.value)
        this.searchList = search
        console.log(this.searchList )
      },
      goBack () {
        this.$router.go(-1)
      },
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
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

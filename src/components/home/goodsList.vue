<template>
    <div>
        <van-grid square :column-num="2" class="goods-main">
          <van-grid-item class="van-hairline--right van-hairline--bottom goods-item" 
          v-for="(item, i) in goodsList" 
          :key="i"
          @click="goodDetail(item.id)">
              <van-image :src="item.url" />
              <p class="goods-name">{{item.text}}</p>
              <p class="goods-message">{{item.msg}}</p>
              <p class="goods-price">￥{{item.price}}</p>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    props: {
      goodsList:{
        type:Array
      }
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
      goodDetail (id) {
        this.$router.push({
          name:'goodsDetail'
        })
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
.goods-main{
  background:rgba(255,255,255,1);
  box-shadow:0px 4px 25px 1px rgba(55,58,64,0.14);
  border-radius:4px;

  .goods-item{
    padding:17px 21px;
    color:#333333;
    font-size:18px;
    height:270px;

    .van-image{
      width:146px;
      height:146px;
    }

    .goods-message{
      font-size:12px;
      margin:10px 0;
    }

    .goods-price{color:red;}

  }
  
}
</style>

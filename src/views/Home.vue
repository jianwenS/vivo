<template>
    <div class="home">
      <!-- title -->
      <van-grid class="home-title">
        <van-grid-item
          v-for="value in titleCom"
          :key="value"
          :border="false"
          :text="value"
        />
      </van-grid>

      <div class="home-main">
          <!-- nav -->
          <van-sticky :offset-top="0">
            <van-nav-bar title="vivo"  left-arrow>
              <van-icon name="arrow-left" slot="left" />
              <van-icon name="search" slot="right" />
              <van-icon name="contact" slot="right" />
            </van-nav-bar>
          </van-sticky>
          <!-- 轮播 -->
          <van-swipe :autoplay="3000" :touchable="true" class="home-swiper">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <img :src="item.url"/>
            </van-swipe-item>
          </van-swipe>
      </div>
      
      <!-- 商品展示部分 -->

      <div class="home-bom">
         <!-- 分类 -->
        <van-grid :border="false" :column-num="3" class="home-bom-cls">
          <van-grid-item v-for="(item, i) in iconList" :key="i">
            <van-image :src="item.src" />
            <p>{{item.text}}</p>
          </van-grid-item>
        </van-grid>

      <!-- 热销产品 -->
      <h2 class="goods-title">
        <img src="../assets/hot.png">
        <span>热卖推荐</span>
      </h2>
      <goods-list :goodsList="goodsList"></goods-list>

      <!-- 推荐 -->
      <h2 class="goods-title">
        <img src="../assets/crown.png">
        <span>热卖推荐</span>
      </h2>
      <goods-list :goodsList="goodsList"></goods-list>

      <!-- 积分 -->
      <h2 class="goods-title">
        <img src="../assets/credits.png">
        <span>热卖推荐</span>
      </h2>
      <goods-list :goodsList="goodsList"></goods-list>

    </div>

    </div>
</template>

<script>
import goodsList from '@/components/home/goodsList'
import api from '@/api/api'
export default {
    props: {

    },
    data() {
        return {
          title:'官方正品,急速送达,全国联保,雕刻定制',
          images: [],
          iconList: [
            {src:require('@/assets/icon1.png'),text:'手机'},
            {src:require('@/assets/icon2.png'),text:'配件'},
            {src:require('@/assets/icon3.png'),text:'分类'}
          ],
          goodsList:[]

        };
    },
    computed: {
      titleCom () {
        return this.title.split(',')
      }
    },
    created() {
      this.getSwiper()
      this.getHot()
    },
    mounted() {
    },
    watch: {

    },
    methods: {
      async getSwiper() {
        let {list} = await api.getSwiper('/swiper')
        this.images = list
      },
      async getHot() {
        let {hot} = await api.getHot('/hot')
        this.goodsList = hot
      },

    },
    components: {
      goodsList
    },
};
</script>

<style lang="scss" scoped>
/deep/ .home-title .van-hairline{background:#000000;}
/deep/ .home-title .van-grid-item__content::after{border:none;}
.home-main {
  position:relative;

  .van-nav-bar{background:rgba(0,0,0,0.3);width:100%;position:absolute;top:0;left:0;}
  .van-sticky--fixed .van-nav-bar{background:#000000;}
  .van-nav-bar .van-icon,.van-nav-bar__title{color:#ffffff;}
  .van-icon-search{margin-right:0.3rem;}

  .home-swiper{height:180px;width:100%;}
  .home-swiper img{width:auto;height:100%;}

}
.home-bom{
  width:100%;
  padding:0 20px;
  box-sizing:border-box;
  background:#f7f7f7;
  padding-top:10px;

 .home-bom-cls{
   height:108px;
   box-shadow:0px 5px 25px 1px rgba(55,58,64,0.14);
   border-radius:4px;

   img{
     width:50px;
     height:50px;
   }
   p{padding:0px;margin:0px;}
 }

 .goods-title{
  display:flex;
  height:76px;
  justify-content:center;
  align-items:center;
  font-size:22px;
  font-family:PingFangSC-Regular;
  font-weight:400;
  
  img{
    width:20px;
    height:19px;
  }

 }

}
</style>

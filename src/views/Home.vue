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
              <van-icon name="search" slot="right" @click="goSearch"/>
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

      <!-- 人气推荐 -->
      <h2 class="goods-title">
        <img src="../assets/like.png">
        <span>人气推荐</span>
      </h2>
      <div class="like">
        <div class="like-item van-hairline--surround" v-for="(item, i) in popularCom" :key="i">{{item}}</div>
      </div>

    </div>

    <footer class="footer">
      <p>Copyright &copy;1692011-2019</p>
      <P>深圳莜橙科技有限公司 版权所有 保留一切权利</p>
      <P>隐私政策 | 法律声明 | 粤B2-20080267 | 粤ICP备05100288号</p>
    </footer>

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
          goodsList:[],
          popular:''

        };
    },
    computed: {
      titleCom () {
        return this.title.split(',')
      },
      popularCom () {
        return this.popular.split(',')
      }
    },
    created() {
      this.getSwiper()
      this.getHot()
      this.getPopular()
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
      async getPopular() {
         let {data} = await api.getPopular('/Popular')
         this.popular = data
      },
      goSearch () {
        this.$router.push('/search')
      }

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

 .like{
   width:100%;
   display:flex;
   flex-wrap:wrap;
   justify-content:flex-start;

   .like-item{
    display:flex;
    width:70px;
    margin-right:10px;
    height:35px;
    border:1px solid #cccccc;
    justify-content:center;
    align-items:center;
    border-radius:16px;
    margin-bottom:17px;
   }

   .like-item:nth-child(4n){
    margin-right:0px;
   }
  
 }

}
.footer{
  height:132px;
  background:#000000;
  box-sizing:border-box;
  padding:33px 0;

  p{
    margin-bottom:10px;
    color:#ffffff;
  }
}
</style>

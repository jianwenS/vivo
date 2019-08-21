<template>
    <div>
        <com-title text="商品详情"></com-title>
        <!-- 轮播 -->
          <van-swipe :autoplay="3000" :touchable="true" class="home-swiper">
            <van-swipe-item v-for="(item, index) in images" :key="index">
              <img :src="item.url"/>
            </van-swipe-item>
          </van-swipe>
        <div class="goodDetail">

          <div class="good_main">
            <h2>iQOO 12GB+128GB 武士黑</h2>
            <p>高通骁龙855旗舰处理器，44W闪充，超级液冷散热，4D游戏 震感2.0+游戏环绕音，Monster Touch压感按键 （付款后3天 内发货）</p>
            <h3>￥1198.00</h3>
          </div>
          <!-- 订单参数 -->
          <div class="good_cs">
            <van-sku
              v-model="showBase"
              :sku="skuData.sku"
              :goods="skuData.goods_info"
              :goods-id="skuData.goods_id"
              :hide-stock="skuData.sku.hide_stock"
              :quota="skuData.quota"
              :quota-used="skuData.quota_used"
              :initial-sku="initialSku"
              reset-stepper-on-hide
              reset-selected-sku-on-hide
              disable-stepper-input
              :close-on-click-overlay="closeOnClickOverlay" 
              :custom-sku-validator="customSkuValidator"  
              @buy-clicked="onBuyClicked"
              @add-cart="onAddCartClicked"
            />
          </div>

        </div>
        
    </div>
</template>

<script>
import api from '@/api/api'
import comTitle from '@/components/comtitle/comTitle'
export default {
    props: {

    },
    data() {
        return {
          images:[],
          skuData:{
            sku: {
              tree: [
                {
                  k: '颜色',
                  k_id: '1',
                  v: [
                    {
                      id: '30349',
                      name: '天蓝色',
                      imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/84629/26/6878/129314/5d48f293E423f60f2/1674c4854bd14e59.jpg'
                    },
                    {
                        id: '1215',
                        name: '白色',
                        imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/75920/32/6432/133151/5d47f90bEeab10d94/310dfd2f4f3e720b.jpg'
                    }
                  ],
                  k_s: 's1',
                  count: 6
                },
                {
                  k: '尺寸',
                  k_id: '2',
                  v: [
                    {
                      id: '1193',
                      name: '1'
                    },
                    {
                        id: '1194',
                        name: '2'
                    }
                  ],
                  k_s: 's2',
                  count: 2
                }
              ],
              list: [
                  {
                    id: 2259,
                    price: 120,
                    //价格
                    discount: 122,
                    s1: '1215',
                    s2: '1193',
                    s3: '0',
                    s4: '0',
                    s5: '0',
                    stock_num: 20,
                    //库存 
                    goods_id: 946755
                  },
                  {
                      id: 2260,
                      price: 110,
                      discount: 112,
                      s1: '1215',
                      s2: '1194',
                      s3: '0',
                      s4: '0',
                      s5: '0',
                      stock_num: 2,
                      //库存 
                      goods_id: 946755
                  },
                  {
                      id: 2257,
                      price: 130,
                      discount: 132,
                      s1: '30349',
                      s2: '1193',
                      s3: '0',
                      s4: '0',
                      s5: '0',
                      stock_num: 40,
                      //库存 
                      goods_id: 946755
                  },
                  {
                      id: 2258,
                      price: 100,
                      discount: 100,
                      s1: '30349',
                      s2: '1194',
                      s3: '0',
                      s4: '0',
                      s5: '0',
                      stock_num: 50,
                      //库存 
                      goods_id: 946755
                  }
              ],
              price: '5.00',
              stock_num: 227,
              // 商品总库存
              none_sku: false,
              // 是否无规格商品 
              hide_stock: false // 是否隐藏剩余库存
            },
            goods_id: '946755',
            quota: 3,
            //限购数量 
            quota_used: 0,
            //已经购买过的数量
            goods_info: {
                title: '测试商品A',
                picture: 'https://img12.360buyimg.com/n7/jfs/t1/84629/26/6878/129314/5d48f293E423f60f2/1674c4854bd14e59.jpg'
            },
            initialSku: {
                s1: "0001",
                s2: "1001",
                selectedNum: 3
            }
         },
          showBase: true,
          showCustom: false,
          showStepper: false,
          showSoldout: false,
          closeOnClickOverlay: true,
          initialSku: {
            s1: '30349',
            s2: '1193',
            selectedNum: 3
          },
          customSkuValidator: () => '请选择xxx!', 
        }
    },
    computed: {

    },
    created() {
      this.getSwiper();
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
      onBuyClicked(data) {
        this.$toast('buy:' + JSON.stringify(data));
        console.log(JSON.stringify(data))
      },
      onAddCartClicked(data) {
        this.$toast('add cart:' + JSON.stringify(data));
      }
    },
    components: {
      comTitle
    },
};
</script>

<style scoped lang="scss">
  .home-swiper{margin-top:40px;}
  .goodDetail{width:100%;padding:0 10px;box-sizing:border-box;background:#f8f8f8;}
  .good_main{
    text-align:left;
    padding:0 20px;
    box-shadow:0px 2px 10px 2px rgba(55,58,64,0.08);
    border-radius:4px;
    background:#ffffff;

    &>h2{
      font-size:18px;
      font-family:PingFangSC;
      font-weight:500;
      height: 60px;
      line-height:60px;
      color:rgba(51,51,51,1);
      border-bottom:1px solid #eee;
    }

    &>p{
      font-size:12px;
      font-family:PingFangSC;
      font-weight:500;
      height:80px;
      padding:10px 0;
      box-sizing:border-box;
      line-height: 0.5rem;
      color:rgba(51,51,51,1);
    }

    &>h3{
      font-size:18px;
      font-family:PingFangSC;
      font-weight:500;
      color:rgba(219,35,46,1);
      padding-bottom:10px;
    }

  }
 /deep/ .van-sku-group-container {text-align: left;}
</style>

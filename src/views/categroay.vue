<template>
    <div>
        <com-title text="类目"></com-title>
        <van-sticky :offset-top="46">
        <van-dropdown-menu active-color="red">
          <van-dropdown-item v-model="value" :options="option" @change="valCnahge"/>
          <van-dropdown-item title="销量" ref="item">
            <van-switch-cell v-model="switch1" title="从高到低"/>
            <van-button block type="info" @click="onConfirm">确认</van-button>
          </van-dropdown-item>
          <van-dropdown-item v-model="optionPriceValue" :options="optionPrice" @change="valCnahge"/>
          <van-dropdown-item title="产品类别" ref="item1">
              <van-row>
                <van-col :class="isCate == i ? 'active' : '' " span="6" v-for="(item,i) in cateList" :key="i" @click.native="onConfirm1(i)">{{item}}</van-col>
              </van-row>
          </van-dropdown-item>
        </van-dropdown-menu>
        </van-sticky>
        <goods-list :goodsList="goodsList"></goods-list>
    </div>
</template>

<script>
import comTitle from '@/components/comtitle/comTitle'
import goodsList from '@/components/home/goodsList'
import api from '@/api/api'
export default {
    props: {

    },
    data() {
        return {
          goodsList:[],
          value: 0,
          switch1: false,
          option: [
            { text: '综合排序', value: 0 },
            { text: '新品优先', value: 1 },
            { text: '评论数从高到底', value: 2 }
          ],
          optionPriceValue: 0,
          optionPrice:[
            { text: '0-3000', value: 0 },
            { text: '3000-6000', value: 1 },
            { text: '6000-1000', value: 2 }
          ],
          cateList:['x系列','a系列','s系列','b系列','d系列','e系列','f系列','max系列','min系列','pro系列'],
          isCate:0
        };
    },
    computed: {

    },
    created() {
      this.getHot();
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      async getHot() {
        let {hot} = await api.getHot('/hot')
        this.goodsList = hot
      },
      onConfirm() {
        this.$refs.item.toggle();
        this.goodsList.sort(function() {
            return (0.5-Math.random());
        })
      },
      onConfirm1 (i) {
        this.isCate = i;
        this.$refs.item1.toggle();
        this.goodsList.sort(function() {
            return (0.5-Math.random());
        })
      },
      valCnahge(){
        this.goodsList.sort(function() {
            return (0.5-Math.random());
        })
      }
    },
    components: {
      comTitle,
      goodsList
    },
};
</script>

<style scoped lang="scss" scoped>
/deep/ .van-cell{padding: 0.26667rem 0.4rem;}
/deep/ .van-cell__title, .van-cell__value {text-align: left;}
.van-col--6 {padding: 15px 0;font-size:14px;}
.van-col--6.active{color:red;}
</style>

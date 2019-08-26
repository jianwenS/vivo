<template>
    <div>
      <van-popup
        v-model="addressEditPopup"
        position="bottom"
        :style="{ height: '100%' , width: '100%' }"
      >
      <van-sticky :offset-top="0">
          <van-nav-bar
              title="添加地址"
              left-arrow
              @click-left="onClickLeft"
          />
      </van-sticky>

        <van-address-edit :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail" />
      </van-popup>
    </div>
</template>

<script>
import api from "@/api/api";
export default {
    props: [
      'addressEditPopup'
    ],
    data() {
        return {
          searchResult: [],
          areaList: {}
        };
    },
    computed: {

    },
    created() {
       this.getCity();
    },
    mounted() {

    },
    watch: {

    },
    methods: {
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [
            {
              name: "黄龙万科中心",
              address: "杭州市西湖区"
            }
          ];
        } else {
          this.searchResult = [];
        }
      },
      onSave(content) {
        console.log(content)
        this.$emit('isEditPpopup',content);
      },
      onDelete() {
        Toast("delete");
      },
      async getCity() {
        let data = await api.getCity("/city");
        this.areaList = data;
      },
      onClickLeft () {
        this.$emit('isEditPpopup');
      }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">
</style>

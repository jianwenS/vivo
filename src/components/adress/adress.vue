<template>
  <div>
    <van-popup v-model="showAdressC"
               position="bottom"
               :style="{ height: '100%' }">
      <van-sticky :offset-top="0">
        <van-nav-bar title="地址详情"
                     left-arrow
                     @click-left="onClickLeft" />
      </van-sticky>

      <van-address-list v-model="chosenAddressId"
                        :list="list1"
                        @add="onAdd"
                        @edit="onEdit" />
    </van-popup>
    <van-popup @close="overlayFn"
               v-model="saveAdress"
               position="bottom">
      <van-cell-group>
        <van-field v-model="adressFrom.name"
                   v-validate="'required'"
                   name="userName"
                   label-align="left"
                   clearable
                   label="姓名"
                   required
                   :error-message="errors.first('userName')"
                   placeholder="请输入姓名" />

        <van-field label-align="left"
                   v-model="adressFrom.tel"
                   type="text"
                   clearable
                   required
                   v-validate="{required: true, numeric: true}"
                   label="电话"
                   placeholder="请输入电话" />
        <van-field label-align="left"
                   v-validate="{required: true}"
                   v-model="adressFrom.address"
                   label="地址"
                   clearable
                   required
                   type="textarea"
                   placeholder="请输入地址"
                   rows="1"
                   autosize />
      </van-cell-group>
      <van-button plain
                  hairline
                  type="primary"
                  size="normal"
                  @click="addressSaveFn">保存</van-button>
      <van-button plain
                  hairline
                  type="danger"
                  size="normal"
                  @click="deleteRessSaveFn">删除</van-button>
    </van-popup>

  </div>
</template>

<script>
import { Dialog } from 'vant';
import comTitle from "@/components/comtitle/comTitle";
export default {
  props: ["showAdress", "addressEditPopup", "list1"],
  data() {
    return {
      chosenAddressId: "1",
      saveAdress: false,
      adressFrom: {
        name: "",
        tel: "",
        address: ""
      }
    };
  },
  computed: {
    showAdressC:{
      get(){
        return this.showAdress
      },
      set(){
        this.$emit('isShowAddress');
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onAdd() {
      this.$emit("isEditPpopup");
    },
    onEdit(item) {
      this.saveAdress = !this.saveAdress;
      let {id,address,name,tel} = item
      this.adressFrom.id = id;
      this.adressFrom.address = address;
      this.adressFrom.name = name;
      this.adressFrom.tel = tel;
    },
    onClickLeft() {
      this.$emit("isPpopup");
    },
    addressSaveFn () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.saveAdress = !this.saveAdress;
          this.$emit("addressSaveFn", this.adressFrom);
        }
      });
    },
    deleteRessSaveFn () {
      Dialog.confirm({
        title: '是否删除',
        message: '确认删除该联系人？'
      }).then(() => {
        this.$emit("deleteRessSaveFn", this.adressFrom);
      });
    },
    overlayFn() {
      return false;
    }
  },
  components: {
    comTitle
  }
};
</script>

<style scoped lang="scss">
/deep/ .van-nav-bar .van-icon {
  color: #000000;
}
/deep/ .van-button--normal {
  min-width: 3.6rem;
  margin: 0.4rem;
}
</style>

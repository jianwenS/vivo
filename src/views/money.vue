<template>
  <div>
    <com-title text="商品结算"></com-title>
    <!-- 联系人卡片 -->
    <!-- <van-contact-card :type="cardType"
                      :name="currentContact.name"
                      :tel="currentContact.tel"
                      @click="showList = true" /> -->
    <!-- 联系人列表 -->
    <!-- <van-popup v-model="showList"
               position="bottom">
      <van-contact-list v-model="chosenContactId"
                        :list="list"
                        @select="onSelect"
                        @edit="onEdit"
                        @add="onAdd" />
    </van-popup> -->
    <!-- 联系人编辑 -->
    <!-- <van-popup v-model="showEdit"
               position="bottom">
      <van-contact-edit :contact-info="editingContact"
                        :is-edit="isEdit"
                        @save="onSave"
                        @delete="onDelete" />
    </van-popup> -->

    <div class="van-cell van-cell--clickable van-address-item">
      <div class="van-cell__value van-cell__value--alone van-address-item__value">
        <div role="radio"
             tabindex="0"
             aria-checked="true"
             class="van-radio">
          <div class="van-radio__icon van-radio__icon--round van-radio__icon--checked"
               style="font-size: 16px;">
            <i class="van-icon van-icon-success"
               style="border-color: rgb(255, 68, 68); background-color: rgb(255, 68, 68);"></i>
          </div>
          <span class="van-radio__label">
            <div class="van-address-item__name">张三，13000000000</div>
            <div class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div>
          </span>
        </div>
      </div><i class="van-icon van-icon-edit van-address-item__edit"></i>
    </div>

    <van-address-list v-model="chosenAddressId"
                      :list="list"
                      :disabled-list="disabledList"
                      disabled-text="以下地址超出配送范围"
                      @add="onAdd"
                      @edit="onEdit" />

    <!-- <van-address-edit :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail" /> -->
  </div>
</template>

<script>
import api from "@/api/api";
import comTitle from "@/components/comtitle/comTitle";
export default {
  data() {
    return {
      areaList: {},
      searchResult: [],
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
      ],
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ]
    }
  },
  created() {
    this.getCity();
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },
    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // 选中联系人
    onSelect() {
      this.showList = false;
    },
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.showEdit = true;
      this.isEdit = false;
    },
    onEdit(item) {
      this.isEdit = true;
      this.editingContact = item;
      this.showEdit = true;
    },
    onSave(res) {
      this.showEdit = false;
      this.showList = false;
      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === res.id ? res : item));
      } else {
        this.list.push(res);
      }
      this.chosenContactId = res.id;
    },
    onDelete(res) {
      this.list = this.list.filter(item => item.id !== res.id);
      this.showEdit = false;
      this.showList = false;
      if (this.chosenContactId === res.id) {
        this.chosenContactId = null;
      }
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
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
    async getCity() {
      let data = await api.getCity("/city");
      console.log(data);
      this.areaList = data;
    }
  },
  components: {
    comTitle
  }
};
</script>

<style scoped lang="scss">
</style>

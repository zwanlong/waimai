<template>
  <div class="rbox">
    <van-coupon-cell
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      @click="showList = true"
    />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
    <div class="bimg"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    }
  },

  methods: {
    onChange (index) {
      this.showList = false
      this.chosenCoupon = index
      this.$router.replace('/my')
    },
    onExchange (code) {
      console.log(666)
    }
  }
}
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}
</script>

<style lang="scss">
  .rbox{
    padding-top: 10%;
    width: 100%;
    height: 90%;
    background: #eee;
    .bimg{
      width: 100%;
      height: 300px;
      padding-top: 20%;
      background: url("../assets/1.png") no-repeat;
      background-size: 100% 100%;
      margin: auto;
    }
  }
</style>

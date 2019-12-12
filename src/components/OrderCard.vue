<template>
  <div class="order-card" v-if="isFood">
    <div v-for="(item, index) in foodCard" :key="index" class="ca-inner">
      <div class="card-title">
        <img
          :src="item.bigImageUrl"
          alt=""
        />
        <span>{{ item.spuName }}</span>
        <i class="iconfont iconarrow-down"></i>
      </div>
      <div class="card-inner">
        <h3>{{ item.spuDesc }}<span>x{{ item.num }}</span></h3>
        <p>{{ item.time }}<span>实付￥ {{ item.originPrice }}</span></p>
      </div>
      <div class="card-comp">
        订单完成
        <div class="card-btn">
          <van-button type="default" size="small" @click="delFood(index)">删除</van-button>
          <van-button type="danger" size="small">再来一单</van-button>
        </div>
      </div>
    </div>
  </div>
  <div class="empty" v-else>
      <div class="em-inner">
        <h2>您还没有下单</h2>
        <van-button type="warning" to="/">点击下单</van-button>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'OrderCard',
  data () {
    return {
      foodlist: [],
      isFood: false
    }
  },
  computed: {
    ...mapState(['foodCard'])
  },
  methods: {
    ...mapMutations(['delFood'])
  },
  created () {
    // console.log()
  },
  mounted () {
    // this.foodlist = [...mapGetters(['getfoodlist'])]
    // console.log(JSON.parse(window.localStorage.getItem('foodCard')).findIndex(item => item.spuId))
    if (JSON.parse(window.localStorage.getItem('foodCard'))) {
      JSON.parse(window.localStorage.getItem('foodCard')).findIndex(item => item.spuId) === 0 ? this.isFood = true : this.isFood = false
    } else {
      this.isFood = false
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/css/mixins.scss';
.order-card {
  margin-bottom: 15px;
  padding-bottom: 35px;
  .ca-inner{
    margin-bottom: 15px;
    background: #fff;
    padding-left: 10px;
  }
  .card-title {
    @include border-bottom;
    height: 55px;
    line-height: 55px;
    img {
      width: 35px;
      height: 35px;
      vertical-align: middle;
    }
    .iconfont {
      float: right;
      margin-right: 20px;
    }
    span {
      margin-left: 10px;
    }
  }
  .card-inner {
    @include border-bottom;
    line-height: 30px;
    h3 {
      font-size: 14px;
      padding-right: 15px;
      span {
        float: right;
      }
    }
    p {
      color: #888;
      font-size: 12px;
      padding-right: 15px;
      span {
        float: right;
        font-size: 14px;
        color: #333;
      }
    }
  }
  .card-comp {
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-button {
      margin-right: 15px;
    }
    .van-button--danger {
      background: pink;
      border: pink;
      color: #888;
    }
  }
}
.empty {
  width: 100%;
  height: 100%;
  .em-inner {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
    line-height: 26px;
    h2{
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
}
</style>

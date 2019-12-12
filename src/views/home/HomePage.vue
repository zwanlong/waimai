<template>
  <div id="Homepage">
    <div id="header">
      <div class="address" @click="fn1">
        <van-icon name="location" />{{ datum ? datum : sys }}<van-icon name="arrow" />
      </div>
      <div class="search" @click="fn2">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>
    <div id="main">
      <van-grid :column-num="5">
        <van-grid-item
          v-for="value in navList"
          :key="value.cateId"
          :icon="value.icon"
          :text="value.name"
          :to="value.url"
        />
      </van-grid>
      <h2><span> —— </span> 附近商家 <span> —— </span></h2>
      <van-sticky :offset-top="50">
  <van-dropdown-menu>
        <van-dropdown-item v-model="nav1" :options="option1" />
        <van-dropdown-item v-model="nav2" :options="option2" />
        <van-dropdown-item title="筛选" ref="item">
          <van-button block type="info">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
</van-sticky>
      <div class="shop">
        <ul>
          <li v-for="(item, index) in ShopList" :key="index" @click="toRout(item.mtWmPoiId)">
            <a href="javascript:;" class="k-dp">
              <div class="pic"><img :src="item.picUrl" :alt="item.shopName" /></div>
              <div class="StoreInformation">
                <div class="ShopName">{{item.shopName}}</div>
                <div class="score">
                  <div class="scoreLeft">
                    <van-icon name="star" color="pink" v-for="adc in 5" :key="adc"/> <span class="sl">{{ item.wmPoiScore / 10 }}</span><span class="sr"> 月售：{{ item.monthSalesTip }}</span>
                  </div>
                  <div class="scoreRight">
                    <span class="tim">{{ item.deliveryTimeTip }}</span>
                    <span class="sg">|</span>
                    <span class="distance">{{ item.distance }}km</span>
                  </div>
                </div>
                <div class="give">
                  <span class="Starting">{{ item.minPriceTip }} &nbsp;</span>
                  <span class="Delivery">{{ item.shippingFeeTip }} &nbsp;</span>
                  <span class="capita">{{ item.averagePriceTip }} &nbsp;</span>
                </div>
                <div class="Discount">
                  <p class="discount"><img src="https://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png@80Q_0e_1l.webp?cimage=true" alt="activity icon" class="zpic">
                  <span class="dright">{{ item.discounts2[0].info }}</span>
                  </p>
                  <p class="Invoice">
                    <img src="https://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png@80Q_0e_1l.webp?cimage=true" alt="activity icon" class="ticket">
                    <span class="invoice">{{ item.discounts2[1].info }}</span>
                  </p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import nav from '../../assets/data/Homepage.json'
export default {
  mounted () {
    // console.log(data)
    this.navList = nav.navList
    this.ShopList = nav.shopList
  },
  data () {
    return {
      sys: '选择地址',
      datum: '',
      navList: [],
      ShopList: [],
      nav1: 0,
      nav2: 'a',
      option1: [
        { text: '综合排序', value: 0 },
        { text: '速度最快', value: 1 },
        { text: '评分最高', value: 2 },
        { text: '评分最高', value: 3 },
        { text: '起送价最低', value: 4 },
        { text: '配送费最低', value: 5 },
        { text: '人均低到高', value: 6 },
        { text: '人均高到低', value: 7 }
      ],
      option2: [
        { text: '销量最高', value: 'a' },
        { text: '距离最近', value: 'b' }
      ]
    }
  },
  computed: {
  },
  watch: {
    nav2 (value) {
      // console.log(value)
      let good = this.ShopList
      if (value === 'a') {
        good.sort(function (a, b) {
          return b.monthSalesTip - a.monthSalesTip
        })
        this.ShopList = good
      } else if (value === 'b') {
        good.sort(function (a, b) {
          return a.distance - b.distance
        })
        this.ShopList = good
      }
    }
  },
  methods: {
    fn1 () {
      this.$router.push('/location')
    },
    fn2 () {
      this.$router.push('/search')
    },
    toRout (sid) {
      this.$router.push(`/Commodity/${sid}`)
    },
    loadComments () {
      var list = localStorage.getItem('user')
      this.datum = JSON.parse(list)
    }
  },
  created () {
    this.loadComments()
  }
}
</script>

<style lang="scss">
#Homepage {
  #header {
    display: flex;
    justify-content: space-around;

    // flex-shrink: 0;
    align-items: center;
    width: 100%;
    height: 50px;
    background: pink;
    position: fixed;
    z-index: 15;
    top: 0;
    padding: 0 10px;
    .address {
      color: #ffffff;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      flex-direction:row;
    }
    .search {
      width: 60%;
      height: 30px;
      border-radius: 15px;
      overflow: hidden;
      .van-search {
        padding: 0;
        // width: 70%;
      }
    }
  }
  #main {
    margin-top: 50px;
    .van- .van-hairline {
      border: none;
      //   margin-top: 50px;
      // }
      // margin-top: 50px;
      // overflow: hidden;
      // background: #fff;
      // margin-bottom: 15px;
      // max-height: 170px;
    }
    [class*='van-hairline']::after {
      border: none;
    }
    .van-grid-item__icon {
      font-size: 45px;
    }
    h2 {
      text-align: center;
      margin-top: 10px;
      font-weight: bold;
      color: #666;
      span {
        color: #666;
      }
    }
    .k-dp {
      padding: 0 10px;
      display: flex;
      flex-direction: row;
      text-decoration: none;
      box-sizing: border-box;
      margin-bottom: 25px;
      margin-top: 10px;
      position: relative;
    }
    .pic {
      width: 76px;
      height: 57px;
      position: relative;
      box-sizing: border-box;
      margin-right: 8px;
      flex-shrink: 0;
      border-radius: 2px;
      overflow: hidden;
    }
    img{
      display: block;
      width: 100%
    }
    .StoreInformation{
      flex: 1 0;
      min-width: 0;
    }
    .ShopName{
      font-size: 16px;
      color: #333;
      line-height: 1.4;
      white-space: nowrap;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
    }
    .score{
      margin-top: 4px;
      display: flex;
    }
    .scoreLeft .sl{
      color: #000;
    }
    .scoreLeft .sr{
      color: #000;
    }
    .scoreRight{
      flex: 1 0;
      text-align: right;
    }
    .tim{
      font-family: mtsi-font;
      font-size: 11px;
      color: #333;
      line-height: 1.4;
    }
    .sg{
      color: #666;
      font-size: 6px;
    }
    .distance{
      font-family: mtsi-font;
      font-size: 11px;
      color: #333;
      line-height: 1.4;
    }
    .give{
      margin-top: 4px;
    }
    .Starting{
      font-family: mtsi-font;
      font-size: 11px;
      color: #333;
      line-height: 1.4;
    }
    .Delivery{
      font-family: mtsi-font;
      font-size: 11px;
      color: #333;
      line-height: 1.4;
    }
    .capita{
      font-family: mtsi-font;
      font-size: 11px;
      color: #333;
      line-height: 1.4;
    }
    .Discount{
      max-height: 46px;
      overflow: hidden;
      position: relative;
    }
    .discount{
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    .zpic{
     width: 15px;
      height: 15px;
      margin-right: 5px;
    }
    .dright{
      color: #666;
      font-family: mtsi-font;
      font-size: 11px;
      line-height: 1.4;
    }
    .Invoice{
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
    .ticket{
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
    .invoice{
      color: #666;
      font-family: mtsi-font;
      font-size: 11px;
      line-height: 1.4;
    }
  }
}
</style>

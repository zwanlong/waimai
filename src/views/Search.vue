<template>
  <div id="Search">
    <van-nav-bar title="搜索页" left-text="返回" @click-left="fn1" left-arrow>
    </van-nav-bar>
    <van-search
      :placeholder=msg
      show-action
      shape="round"
      v-model="kkk"
    >
      <div slot="action" @click="onSearch" >搜索</div>
    </van-search>
    <div class="nr">
    <h3 class="hotSearch">热门搜索</h3>
    <van-divider />
    <div class="hotList">
    <van-tag plain>麻辣烫</van-tag>
    <van-tag plain>水饺</van-tag>
    <van-tag plain>奶茶</van-tag>
    <van-tag plain>煲仔饭</van-tag>
    <van-tag plain>尊宝披萨</van-tag>
    <van-tag plain>披萨</van-tag>
    <van-tag plain>汉堡</van-tag>
    <van-tag plain>螺蛳粉</van-tag>
    <van-tag plain>一点点奶茶</van-tag>
    <van-tag plain>粥</van-tag>
    <van-tag plain>coco奶茶</van-tag>
    <van-tag plain>面</van-tag>
    <van-tag plain>蟹堡王</van-tag>
    </div>
    <div class="history">
      <h3 class="hotSearch">搜索历史</h3>
      <van-icon class="delete" name="delete" />
    </div>
    <van-divider />
    <div class="hisList">
    <van-tag plain v-for="(item, index) in zwl" :key='index' @click="fn3(item)">{{ item }}</van-tag>
    </div>
    </div>
    <div v-if="gcx">
      <ul>
        <li v-for="(item, index) in searchList" :key="index" @click="toRout(item.mtWmPoiId)">
            <a href="#" class="k-dp">
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
</template>

<script>
import nav from '../assets/data/Homepage.json'
export default {
  mounted () {
    this.ShopList = nav.shopList
  },
  data () {
    return {
      ShopList: [],
      msg: '请输入搜索关键词',
      kkk: '',
      zwl: [],
      gcx: false
    }
  },
  computed: {
    searchList () {
      return this.ShopList.filter(item => {
        return item.shopName.indexOf(this.kkk) > -1
      })
    }
  },
  methods: {
    fn1 () {
      this.$router.back()
      console.log(666)
    },
    onSearch () {
      // console.log(666666666666)
      this.zwl.push(this.kkk)
      // this.kkk = ''
      // this.gcx = !this.gcx
    },
    fn3 (value) {
      this.kkk = value
    },
    toRout (sid) {
      this.$router.push(`/Commodity/${sid}`)
    }
  },
  watch: {
    kkk (value) {
      this.kkk === '' ? this.gcx = false : this.gcx = true
    }
  }
}
</script>

<style lang="scss">
#Search{
  .hotSearch{
    margin-top: 10px;
    color: #666;
  }
  .history{
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
  }
  .delete{
    font-size: 20px;
    margin-top: 10px;
  }
  .nr{
    margin: 0 10px;
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
</style>

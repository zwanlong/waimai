<template>
   <div class="shop">
        <ul>
          <li v-for="(item, index) in baoziList" :key="index" @click="toRout(item.mtWmPoiId)">
            <a href="#" class="k-dp">
              <div class="pic"><img :src="item.picUrl" :alt="item.shopName" /></div>
              <div class="StoreInformation">
                <div class="ShopName">{{item.shopName}}</div>
                <div class="score">
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
              </div>
            </a>
          </li>
        </ul>
      </div>
</template>

<script>
import nav from '../../assets/data/Homepage.json'
export default {
  mounted () {
    this.baoziList = nav.baoziList
  },
  data () {
    return {
      baoziList: []
    }
  }
}
</script>

<style lang="scss">
.shop{
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

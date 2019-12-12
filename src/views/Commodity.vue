<template>
  <div class="commodity">
    <div class="c-header">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <van-card
        num=""
        :price="this.foods.shopInfo.deliveryFee + '起送'"
        :desc="this.foods.shopInfo.deliveryMsg"
        :title="this.foods.shopInfo.minFeeDecoded"
        :thumb="this.foods.shopInfo.shopPic"
      />
    </div>
    <div class="c-list">
      <van-tabs v-model="active">
        <van-tab title="点餐">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item
              v-for="(item, index) in dityslist"
              :key="index"
              :title="item"
            />
          </van-sidebar>
          <div class="c-food-list">
            <div v-for="item in foodlist" :key="item.tag" class="flist-inner">
              <p class="finner-title">{{ item.categoryName }}</p>
              <ul>
                <li v-for="list in item.spuList" :key="list.spuId">
                  <div class="left">
                    <img :src="list.littleImageUrl" alt="" />
                  </div>
                  <div class="right">
                    <h3>{{ list.spuName }}</h3>
                    <p>{{ list.spuDesc }}</p>
                    <p>月销：{{ list.tag }}</p>
                    <section>￥：{{ list.originPrice }} <span></span></section>
                    <section>{{ list.skuList[0].skuPromotionInfo }}</section>
                  </div>
                  <van-button round type="info" @click="addFood(list)">
                    <van-icon name="plus" />
                  </van-button>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="评价">评价</van-tab>
        <van-tab title="商家">商家</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import food from '@/assets/data/food.json'
import Vue from 'vue'
import { Sidebar, SidebarItem, Sticky } from 'vant'
import { mapMutations } from 'vuex'

Vue.use(Sidebar).use(SidebarItem).use(Sticky)
export default {
  name: 'Commodity',
  data () {
    return {
      foods: [],
      dityslist: [],
      foodlist: [],
      flist: [],
      active: 0,
      activeKey: 0
    }
  },
  methods: {
    ...mapMutations(['addFood']),
    onClickLeft () {
      //   Toast('返回')
      this.$router.back()
    },
    onClickRight () {
      //   Toast('右边')
    }
  },
  created () {
    let id = this.$route.params.id
    let list = []
    for (let item in food) {
      if (food[item].mtWmPoiId === id) {
        this.foodlist = food[item].categoryList.map(item => item)
        this.dityslist = food[item].categoryList.map(item => item.categoryName)
        this.foods = food[item]
        this.flist = food
      }
      list.push(food[item].categoryList.map(item => item.spuList.map(item => item)))
    }
    list.forEach(function (item) {
      item.forEach(function (it) {
        it.forEach(function (i) {
          list.push(i)
        })
      })
    })
    // console.log(this.$store)
    // console.log(...list)
    // let list1 = [...list]
    // console.log(list)
  }
}
</script>

<style lang="scss">
.commodity {
  height: 100%;
  .c-header {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #eee;
    color: #fff;
    height: 25%;
    .van-icon {
      color: #333;
    }
    .van-nav-bar__text {
      color: #333;
    }
    .van-nav-bar {
      background: 0;
      border-bottom: 1px solid #888;
    }
    .van-card {
      background: 0;
      .van-card__content {
        padding: 20px 0 0 10px;
      }
    }
  }
  .c-list {
    height: 600px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    top: 25%;
    left: 0;
    .van-tabs{
      height: 100%;
    }
    .van-tabs__content{
      overflow-x: hidden;
      height: 100%;
    }
    .van-tab__pane {
      display: flex;
      .van-sidebar {
        min-height: 100%;
        color: #333;
        position: relative;
        overflow: scroll;
        z-index: 999;
        width: 20%;
        }
    }
      .c-food-list {
        width: 80%;
        height: 70%;
        position: relative;
        right: 0;
        overflow: hidden;
        // background: pink;
        // display: flex;
        p {
          width: 100%;
          display: block;
        }
        .van-tab__pane {
          height: 100%;
        }
        .flist-inner {
          .finner-title {
            background: #eee;
            line-height: 26px;
          }
          li {
            display: flex;
            border-bottom: .25px solid #ccc;
            position: relative;
            background: #fff;
            .van-button{
              position: absolute;
              right: 10px;
              bottom: 10px;
              width: 30px;
              height: 30px;
              background: pink;
              border: 0;
              .van-icon{
                text-align: center;
                line-height: 30px;
                position: absolute;
                left: 8px;
                top: 0;
              }
            }
          }
          .left {
            height: 100%;
            img {
              width: 80px;
              height: 59px;
              vertical-align: middle;
              margin-top: 10px;
            }
          }
          .right {
            padding: 10px 0;
            h3 {
              font-size: 14px;
              font-weight: 700;
            }
            p {
              font-size: 12px;
              color: #888;
              width: 200px;
              height: 24px;
              line-height: 24px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            section{
              font-size: 14px;
              color: red;
              line-height: 24px;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="food">
    <div class="dh">
      <van-nav-bar class="fh" left-text="返回" @click-left="onClickLeft"/>
   <van-search class="foodSearch" placeholder="请输入商家或商品名称" @click="fn1" />
   </div>
   <van-tabs sticky>
     <van-sticky :offset-top="40">
       <van-dropdown-menu>
        <van-dropdown-item v-model="nav1" :options="option1" />
        <van-dropdown-item v-model="nav2" :options="option2" />
        <van-dropdown-item title="筛选" ref="item">
          <van-button block type="info">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
</van-sticky>
   <van-tab v-for="(item, index) in navName" :title="item.name" :key="index" :to="item.url">
     <router-view></router-view>
   </van-tab>
</van-tabs>
  </div>
</template>

<script>
import nav from '../assets/data/Homepage.json'
export default {
  mounted () {
    this.ShopList = nav.shopList
    this.navName = nav.navName
  },
  data () {
    return {
      ShopList: [],
      navName: [],
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
  methods: {
    fn1 () {
      this.$router.push('/search')
      console.log(666)
    },
    onClickLeft () {
      this.$router.push('/homepage')
    }
  }
}
</script>

<style lang="scss">
.food{
  .dh{
    display: flex;
    justify-content: space-between;
  }
  .fh{
    width: 20%;
    border-bottom-width: 0;
  }
  .foodSearch{
    width: 80%;
  }
  .van-search__content{
    width: 100%;
    border-radius: 25px;
  }
}
</style>

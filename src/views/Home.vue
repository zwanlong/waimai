<template>
  <div class="home">
    <div class="home-body">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item info="" to="homepage" name="home">
        <span>首页</span>
        <i slot="icon" class="iconfont iconshouye"></i>
      </van-tabbar-item>
      <van-tabbar-item info="" to="order" name="order">
        <span>订单</span>
        <i slot="icon" class="iconfont icon6"></i>
      </van-tabbar-item>
      <van-tabbar-item info="" to="my" name="my">
        <span>我的</span>
        <i slot="icon" class="iconfont icon-wode"></i>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'home',
      icon: {
        active: 'https://img.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img.yzcdn.cn/vant/user-inactive.png'
      }
    }
  }
}
</script>

<style lang="scss">
.home{
  height: 100%;
  .van-tabbar-item {
    .iconfont {
      font-size: 25px
    }
  }
  .home-body{
    height: 100%;
  }
}
</style>

<template>
<div class="box">
  <div class="title">
    <div class="img"></div>
    <p v-if="userInfo">{{ userInfo.username }}</p>
    <p v-else>未登录</p>
  </div>
  <div>
    <van-cell title="美团红包" is-link to="red" />
    <van-cell title="收货地址" is-link to="site" />
    <van-cell title="常见问题" is-link to="ques" />
    <van-cell title="美团协议与说明" is-link to="deal" />
    <van-cell title="退出登录" is-link @click="fn1" />
  </div>
  <div class="font">
    <p>客服电话: 10101010</p>
  </div>
  <div class="footer">
    <p>服务时间: 9:00-23:00</p>
  </div>
  <van-dialog
  v-model="show"
  title="确认退出吗"
  show-cancel-button
  @confirm="fn2"
  >
</van-dialog>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'my',
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    fn1 () {
      this.show = true
    },
    fn2 () {
      console.log(666)
      window.localStorage.removeItem('userInfo')
      this.$router.replace('/homepage')
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
.box{
  height: 100%;
  background: rgb(240, 240, 240);
  .title{
    width: 100%;
    height: 100px;
    padding: 10% 0 5%;
    background: #fff099;
    .img{
      width: 20%;
      padding-top: 20%;
      border-radius: 100%;
      border: 4px solid #fff099;
      background: url("../../assets/1.png") no-repeat;
      background-size: 100% 100%;
      margin: auto;
    }
    p{
      width: 100%;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      color: #333333;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .font{
    font-size: 14px;
    margin-top: 20px;
    text-align: center;
    color: #ffb000;
    padding: 10px 0;
    background: white;
  }
  .footer{
    font-size: 12px;
    text-align: center;
    color: #999999;
    padding: 10px 0;
    margin-bottom: 65px;
  }
}
</style>

<template>
  <div class="lbox">
    <div class="ltitle">
      <div class="limg"></div>
      <p>账号注册</p>
    </div>
    <van-cell-group>
      <van-field
        label="账号"
        placeholder="请输入账号"
        v-model="username"
      >
      </van-field>
      <van-field
        label="密码"
        placeholder="请输入密码"
        v-model="password"
      >
      </van-field>
      <div class="lbot">
        <van-button type="primary" size="large" to="/login" @click="handleSign">注册</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>
import { Registry } from '../api/user'
export default {
  name: 'Sign',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSign () {
      Registry({
        username: this.username,
        password: this.password
      }).then(response => {
        let result = response.data
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss" >
  .lbox{
    .ltitle{
    width: 100%;
    height: 130px;
    padding: 10% 0 5%;
    background: #fff099;
    margin-bottom: 30px;
    .limg{
      width: 20%;
      padding-top: 20%;
      border-radius: 100%;
      border: 4px solid #fff099;
      background: url("../assets/1.png") no-repeat;
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
  .van-button--primary{
    color: rgba(50,50,51,.88);
    background: #fff099;
    border: 1px solid #eee;
  }
  .lbot{
    margin-top: 50px;
    .van-button--large{
      margin-top: 20px;
    }
  }
  .van-cell{
   margin: 30px;
   font-size: 18px;
  }
  }
</style>

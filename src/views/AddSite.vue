<template>
  <div class="abox">
    <van-nav-bar
      title="添加收货地址"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="cont">
      <ul class="cul">
        <li>
          <span>姓名</span>
          <input type="text" placeholder="收货人姓名" v-model="usr" />
        </li>
        <li>
          <span>电话</span>
          <input type="text" placeholder="收货人手机号" v-model="tel" />
        </li>
        <li>
          <span>地区</span>
          <input type="text" placeholder="选择省/市/区" v-model="area" />
        </li>
        <li>
          <span>详细地址</span>
          <input
            type="text"
            placeholder="街道、楼层、房间等信息"
            v-model="adr"
          />
        </li>
      </ul>
      <div class="boxx">
        <button class="btn" @click="fn1">保存</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchResult: [],
      usr: '',
      tel: '',
      area: '',
      adr: '',
      id: '',
      lists: []
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/site')
    },
    fn1 () {
      this.$router.replace('/site')
      let list = JSON.parse(localStorage.getItem('sign'))
      let user = {
        usr: this.usr,
        tel: this.tel,
        id: this.adr,
        adr: this.adr,
        area: this.area
      }
      if (!list) {
        list = [user]
      } else {
        list.push({ ...user })
      }
      localStorage.setItem('sign', JSON.stringify(list))
    }
  }
}
</script>

<style lang="scss">
.abox {
  .cont {
    width: 320px;
    height: 320px;
    .cul {
      width: 100%;
      height: 250px;
      justify-content: center;
      flex-direction: column;
      display: flex;
      li {
        justify-content: space-around;
        align-items: center;
        display: flex;
        width: 100%;
        height: 60px;
        padding-left: 3%;
        border-bottom: 1px solid #eee;
        input {
          width: 210px;
          height: 34px;
          border: 0;
          flex: 0.7;
        }
        span {
          flex: 0.3;
        }
      }
    }
  }
  .boxx {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
    .btn {
      width: 95%;
      height: 50px;
      background: #fff099;
      border: 1px solid #fff099;
      border-radius: 30px;
      color: #333;
    }
  }
}
</style>

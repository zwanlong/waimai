<template>
  <div class="address">
    <div class="titie">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="center" v-show="!value">
      <p>热门城市</p>
      <div class="list">
        <ul>
          <li v-for="(ctl, index) in ctlist" :key="index"  @click="fn3(ctl)" :ref="`cheng-${ctl}`">{{ ctl }}</li>
        </ul>
      </div>
    </div>
    <div class="footer" v-show="!value">
      <div class="lmain" ref="lleft">
        <div
        class="citylist"
        v-for="item in cityList"
        :key='item.py'
        :ref="`list-${item.py}`">
          <p class="py">{{ item.py }}</p>
          <ul>
            <li v-for="(val, index) in item.list" :key='index' @click="fn2(val)" :ref="`hai-${val.name}`">{{ val.name }}</li>
          </ul>
        </div>
      </div>
      <div class="rmain">
        <ul>
          <li v-for="(py, index) in pys" :key="index" @click="fn1(py)">{{ py }}</li>
        </ul>
      </div>
    </div>
    <div class="hide" v-show="value">
      <ul>
        <li v-for="city in searchList" :key="city.cityId" @click="fn4(city)" :ref="`shi-${city.name}`">{{ city.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCityList } from '../api/city'
export default {
  name: 'location',
  data () {
    return {
      value: '',
      cities: [],
      ctlist: ['北京', '上海', '广州', '深圳', '成都', '杭州', '南京', '苏州', '重庆', '南京', '天津', '西安']
    }
  },
  computed: {
    cityList () {
      let result = []
      this.cities.forEach(item => {
        let py = item.pinyin.charAt(0).toUpperCase()
        let index = result.findIndex(city => city.py === py)
        if (index > -1) {
          result[index].list.push(item)
        } else {
          let obj = {
            py,
            list: [item]
          }
          result.push(obj)
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    pys () {
      return this.cityList.map(item => item.py)
    },
    searchList () {
      return this.cities.filter(item => {
        return item.name.indexOf(this.value) > -1 || item.pinyin.indexOf(this.value) > -1
      })
    }
  },
  created () {
    getCityList().then(response => {
      let res = response.data
      // console.log(res)
      this.cities = res.data.cities
    })
  },
  methods: {
    fn1 (py) {
      console.log(py)
      // console.log(this.$refs[`list-${py}`][0].offsetTop)
      let top = this.$refs[`list-${py}`][0].offsetTop
      this.$refs['lleft'].scrollTop = top
    },
    fn2 (val) {
      localStorage.setItem('user', JSON.stringify(val.name))
      this.$router.replace('/homepage')
    },
    fn3 (ctl) {
      localStorage.setItem('user', JSON.stringify(ctl))
      this.$router.replace('/homepage')
    },
    fn4 (city) {
      localStorage.setItem('user', JSON.stringify(city.name))
      this.$router.replace('/homepage')
    },
    onCancel () {
      this.$router.replace('/homepage')
    }
  }
}
</script>

<style lang="scss">
.address {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
    width: 100%;
  }
  .center {
    height: 190px;
    width: 100%;
    p {
      margin: 3%;
      font-size: 14px;
      color: #bbb;
    }
    .list {
      width: 100%;
      ul {
        width: 100%;
        margin: 2%;
        text-align: center;
        li {
          float: left;
          width: 70px;
          height: 35px;
          border: 1px solid #ccc;
          margin: 3px;
          line-height: 35px;
          font-size: 14px;
        }
      }
    }
  }
  .footer {
    padding: 3%;
    display: flex;
    flex: 1;
    height: 100%;
    .lmain {
      flex: 1;
      overflow-y: auto;
      position: relative;
    }
    .rmain {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      font-size: 13px;
      li{
        text-align: center;
      }
    }
    .citylist {
      .py {
        height: 26px;
        background: #eee;
        font-size: 18px;
        color: #aaa;
        line-height: 26px;
      }
      li {
        height: 40px;
        border-bottom: 1px solid #eee;
        line-height: 40px;
      }
    }
  }
  .hide {
    ul {
      width: 100%;
      height: 400px;
      overflow-y: auto;
      padding: 5%;
      li {
        height: 30px;
        border-bottom: 1px solid #eee;
        line-height: 30px;
      }
    }
  }
}
</style>

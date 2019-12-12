import Vue from 'vue'
import Vuex from 'vuex'
import { Login } from '../api/user'
import foods from '@/assets/data/food.json'
Vue.use(Vuex)

const userInfo = window.localStorage.getItem('userInfo')
const token = window.localStorage.getItem('token')
let foodCard = JSON.parse(window.localStorage.getItem('foodCard')) || []

export default new Vuex.Store({
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : null,
    token: token || null,
    foods,
    foodCard
    // foodCardlist
  },
  getters: {
    getfoodlist (state) {
      let list = []
      for (let item in state.foods) {
        list.push(foods[item].categoryList.map(item => item.spuList.map(item => item)))
      }
      list.forEach(function (item) {
        item.forEach(function (it) {
          it.forEach(function (i) {
            list.push(i)
          })
        })
      })
      return list
    },
    getIsFood (state) {
      // return state.foodCard === [] ? false : true
    }
  },
  mutations: {
    LOGIN (state, payload) {
      state.userInfo = payload.userInfo
      state.token = payload.token
    },
    addFood (state, value) {
      let good = value
      let date = new Date()
      let time = `${date.getFullYear()}年-${date.getMonth()}月-${date.getDate()}日-${date.getHours()}时-${date.getUTCMinutes()}分-${date.getSeconds()}秒`
      state.foodCard.push({ ...good, time, num: 1 })
      window.localStorage.setItem('foodCard', JSON.stringify(state.foodCard))
      // console.log(state.foodCard)
    },
    delFood (state, index) {
      state.foodCard.splice(index, 1)
      window.localStorage.setItem('foodCard', JSON.stringify(state.foodCard))
    }
  },
  actions: {
    loginAsync (context, { username, password, callback }) {
      Login({
        username,
        password
      }).then(response => {
        let result = response.data
        if (result.code === 0) {
          // 将数据写入仓库中
          context.commit('LOGIN', result.data)
          // 给本地存储一份数据
          window.localStorage.setItem('userInfo', JSON.stringify(result.data.userInfo))
          window.localStorage.setItem('token', result.data.token)
          // 跳转至我的页面
          callback()
        } else {
          alert(result.msg)
        }
      })
    }
  },
  modules: {
  }
})

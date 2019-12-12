import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global.scss'
import { Popup, Button, Search, Tabbar, CouponList, CouponCell, Sticky, Dialog, TabbarItem, Tag, Divider, Tab, Tabs, Icon, Cell, Card, CellGroup, AddressEdit, Field, AddressList, NavBar, Grid, GridItem, DropdownMenu, DropdownItem } from 'vant'
Vue.use(Popup)
Vue.use(Cell).use(CellGroup)
Vue.use(AddressList)
Vue.use(NavBar)
Vue.use(AddressEdit)
Vue.use(Field)
Vue.use(Card)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(Tab).use(Tabs)
Vue.use(Sticky)
Vue.use(Dialog)
Vue.use(CouponList)
Vue.use(CouponCell)
Vue.use(Button).use(Search).use(Tabbar).use(TabbarItem).use(Icon).use(Grid).use(GridItem).use(DropdownMenu).use(DropdownItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

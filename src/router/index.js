import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/home/HomePage.vue'
import My from '../views/home/My.vue'
import Order from '../views/home/Order.vue'
import OrderDetails from '../views/home/order/OrderDetails.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Address from '../views/Address.vue'
import Food from '../views/Food.vue'
import Delicious from '../views/food/Delicious.vue'
import Dumplings from '../views/food/Dumplings.vue'
import Lunch from '../views/food/Lunch.vue'
import Hamburger from '../views/food/Hamburger.vue'
import Pizza from '../views/food/Pizza.vue'
import Baozi from '../views/food/Baozi.vue'
import Noodle from '../views/food/Noodle.vue'

import Complete from '../views/Complete.vue'
import Location from '../views/Location.vue'
import Deal from '../views/Deal-1.vue'
import Ques from '../views/Ques-1.vue'
import Red from '../views/Red-1.vue'
import Site from '../views/Site-1.vue'
import AddSite from '../views/AddSite.vue'
import Commodity from '../views/Commodity.vue'
import store from '../store'
import sign from '../views/Sign.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'homepage',
        name: 'homepage',
        component: HomePage
      },
      {
        path: 'my',
        name: 'my',
        component: My,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'order',
        name: 'order',
        component: Order,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: 'details',
            component: OrderDetails
          }
        ]
      },
      {
        path: '',
        redirect: '/homepage'
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/food',
    component: Food,
    children: [
      {
        path: 'delicious',
        component: Delicious
      },
      {
        path: 'dumplings',
        component: Dumplings
      },
      {
        path: 'lunch',
        component: Lunch
      },
      {
        path: 'hamburger',
        component: Hamburger
      },
      {
        path: 'pizza',
        component: Pizza
      },
      {
        path: 'baozi',
        component: Baozi
      },
      {
        path: 'noodle',
        component: Noodle
      },
      {
        path: '',
        redirect: 'delicious'
      }
    ]
  },
  {
    path: '/complete',
    component: Complete
  },
  {
    path: '/location',
    component: Location
  },
  {
    path: '/deal',
    component: Deal
  },
  {
    path: '/ques',
    component: Ques
  },
  {
    path: '/red',
    component: Red
  },
  {
    path: '/site',
    component: Site
  },
  {
    path: '/addSite',
    component: AddSite
  },
  {
    path: '/Commodity/:id',
    component: Commodity
  },
  {
    path: '/sign',
    component: sign
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const userInfo = store.state.userInfo
  if (!userInfo && to.meta.requireAuth) {
    next({
      path: './login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router

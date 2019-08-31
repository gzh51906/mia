import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from './views/Tabbar.vue'

Vue.use(Router)
// 嵌套组件
import Home from './views/Tabbar/Home'
import Classify from './views/Tabbar/Classify'
import Cart from './views/Cart'
import Login from './views/Login'
import Detail from './views/Detail'
export default new Router({
  routes: [{
    path: '/tabbar',
    name: 'tabbar',
    component: Tabbar,
    children: [{
      name: 'home',
      // 第二层路由的path是没有/
      path: 'home',
      component: Home,
    }, {
      name: 'classify',
      path: 'classify',
      component: Classify,
    },

    ],
  },
  {
    name: 'cart',
    path: 'cart',
    component: Cart,
  },
  {
    name: 'login',
    path: 'login',
    component: Login,
  },
  {
    name: 'detail',
    path: 'detail',
    component: Detail,
  },

  // 重定向
  {
    path: '/',
    // 别名
    alias: '/index.html',
    redirect: () => {
      // 我要跳进/123获取路由的一些详情信息
      // console.log(to)
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      return '/tabbar/home'
    }
  }
  ]
})
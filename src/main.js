import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import './mock/mock'

import   UserList      from    './components/UserList.vue'
import   ProductList   from    './components/ProductList.vue'
import   notFound      from    './components/default/404.vue' 
import   User          from    './components/default/User.vue' 
import   Login         from    './components/default/Login.vue'

// axios.defaults.baseURL = '  http://localhost:8080' // 设置默认请求的url
Vue.prototype.$http = axios 
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store({
  state: {
    flag: false,
    // isLogined: false,
    userInfo: {

    }
  },
  mutations: {
    toggle (state) {
      if(state.flag){ state.flag =false }
      else { state.flag =true }
    },
    // loginIn(state) {
    //   state.isLogined = true
    // },
    // loginOut(state) {
    //   state.isLogined = false
    // }
  }
})

const routes = [
  { path: '/',redirect:'/login' },
  { path: '/users',component: UserList, name: 'UserList'},
  { path: '/users/:id', component: User, name: 'users'},
  { path: '/products', component: ProductList, name: 'ProductList' },
  { path: '/login',component: Login },


  { path: '*', component:notFound},
]

const router = new VueRouter({
  mode: 'history',
  routes,
})


router.beforeEach((to, from, next) => {
 
  if( !localStorage.token && to.path!='/login' ){
    next('/login')
  }else{
    next()
  }
  
})



new Vue({
  store,
  router,  
  render: h => h(App),
}).$mount('#app')


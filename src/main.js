import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  MessageBox
} from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import VueAwesomeSwiper from 'vue-awesome-swiper' 
import 'swiper/dist/css/swiper.css' 
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'


// Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 判断用户是否已经登录
function isLogged() {
  const sessionKey = localStorage.getItem('screeningforcancer-jingxi'); // 从localStorage中获取sessionKey
return sessionKey !== null
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    // 判断用户是否登录
    if (!isLogged()) {
      // 如果用户未登录，则跳转到登录页面
      MessageBox.confirm('当前页面需要登录后才能访问，是否前往登录？', '需要登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        next(`/login?redirect=${to.path}`)

      }).catch(() => {
        next(from.path)
      
      })
    } else {
      // 如果用户已登录，则允许页面访问
      next()
    }
  } else {
    // 对于无需权限检查的页面，直接允许访问
    next()
  }
})

// function userLoggedIn() {
//   // 判断用户是否已登录
//   // 这里可以根据自己的登录逻辑来实现，比如判断本地是否有登录缓存等
//   return localStorage.getItem('token') !== null
// }



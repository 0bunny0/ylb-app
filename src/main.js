import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 全局样式
import '@/assets/css/details.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/index.css'
import '@/assets/css/list.css'
import '@/assets/css/login.css'
import '@/assets/css/public-head.css'
import '@/assets/css/reset.css'
import '@/assets/css/swiper.css'
import '@/assets/css/user_center.css'
import '@/assets/css/user_pay.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

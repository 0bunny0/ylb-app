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

//前端请求拦截器,发送请求前执行
axios.interceptors.request.use(function(request){
	console.log("前端请求拦截器")
	
	//修改请求头
	//if('/api/v1/user/info'==request.url){//可以设置特定的请求 携带token  也可以 不写if 让所有请求都携带token
		/* 会话存储中是否有token */
		if(window.sessionStorage.getItem('accessToken')){
			let token = window.sessionStorage.getItem('accessToken');
			request.headers['Authorization']='Bearer '+token;
			
			let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
			let uid = userInfo.uid;
			request.headers['uid']=uid;
		}
	//}
	// 返回请求对象
	return request;
},function(err){
	// 请求失败
})

//前端响应拦截器，回调函数执行前执行
axios.interceptors.response.use(function(resp){
  console.log("前端响应拦截器")
  /**如果 响应码是4003 说明需要重新登录     路由、跳转到登陆界面 */
  if(resp.data.code==4003){
    setTimeout(function(){
      /**路由组件 */
      $router.push({
        path:"/page/Login"
      })
      window.location.href="/page/login"; //会刷新页面
    },500);
  }
  return resp;
},function(err){

})

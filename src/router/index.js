import Vue from 'vue'
import VueRouter from 'vue-router'



/* 导入组件 */
import Index from '../views/Index.vue'
import LoanList from '../views/LoanList.vue'
import LoanDetail from '../views/LoanDetail.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import UserCenter from '../views/UserCenter.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/user/center',
    name: 'UserCenter',
    component: UserCenter
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/product/type',
    name: 'LoanList',
    component: LoanList
  },
  {
    path: '/product/detail',
    name: 'LoanDetail',
    component: LoanDetail
  },
  {
    path: '/page/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/page/login',
    name: 'Login',
    component: Login
  }

  
]

const router = new VueRouter({
  routes
})

export default router

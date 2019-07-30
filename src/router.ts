import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const asyncRouterMap = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("@/views/Login/Login.vue")
  },
  {
    path: '/password',
    name: 'password',
    component: () => import("@/views/Login/Password.vue")
  },
]

const router: any = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: asyncRouterMap
})

router.beforeEach((to: any, from: any, next: any) => {
  const isLogin = localStorage.tsToken ? true : false;

  if(to.path == '/login' || to.path == '/password'){
    next()
  }else{
    if(isLogin){

    }else{
      next('/login');
    }
  }
})

export default router;
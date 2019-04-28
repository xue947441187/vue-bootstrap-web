import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/login/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/login",
      component: login
    }


  ]
})

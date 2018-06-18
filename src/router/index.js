import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Edit from '@/components/edit'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/building',
      name: 'building',
      component: () => import('./views/Building.vue')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('./views/Case.vue')
    },
    {
      path: '/cost',
      name: 'cost',
      component: () => import('./views/Cost.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/journalism',
      name: 'journalism',
      component: () => import('./views/Journalism.vue')
    }
    

  ]
})

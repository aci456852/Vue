import Vue from 'vue'
import Router from 'vue-router'
import NavigationMenu from '@/components/testmore/NavigationMenu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavigationMenu',
      component: NavigationMenu
    }
  ]
})

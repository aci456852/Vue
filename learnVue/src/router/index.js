import Vue from 'vue'
import Router from 'vue-router'
import OrderList from '@/components/testmore/OrderList'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrderList',
      component: OrderList
    }
  ]
})

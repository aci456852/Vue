import Vue from 'vue'
import Router from 'vue-router'
import reverse from '@/components/bind/reverse'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'reverse',
      component: reverse
    }
  ]
})

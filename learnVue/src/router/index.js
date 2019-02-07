import Vue from 'vue'
import Router from 'vue-router'
import learn from '@/components/learn'
import learn2 from '@/components/learn2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'learn',
      component: learn
    },{
      path: '/',
      name: 'learn2',
      component: learn2
    }
  ]
})

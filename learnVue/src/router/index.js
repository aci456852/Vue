import Vue from 'vue'
import Router from 'vue-router'
import response from '@/components/learnmore/response'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'response',
      component: response
    }
  ]
})

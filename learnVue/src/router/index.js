import Vue from 'vue'
import Router from 'vue-router'
import model from '@/components/bind/model'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'model',
      component: model
    }
  ]
})

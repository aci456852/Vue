import Vue from 'vue'
import Router from 'vue-router'
import component from '@/components/learnmore/component'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'component',
      component: component
    }
  ]
})

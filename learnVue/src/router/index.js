import Vue from 'vue'
import Router from 'vue-router'
import watch from '@/components/learnmore/watch'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watch',
      component: watch
    }
  ]
})

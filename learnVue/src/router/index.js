import Vue from 'vue'
import Router from 'vue-router'
import input from '@/components/learnmore/input_style'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'input',
      component: input
    }
  ]
})

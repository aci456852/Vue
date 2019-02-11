import Vue from 'vue'
import Router from 'vue-router'
import vfor from '@/components/learnmore/v-for'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'v-for',
      component: vfor
    }
  ]
})

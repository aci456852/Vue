import Vue from 'vue'
import Router from 'vue-router'
import EditText from '@/components/testmore/EditText'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EditText',
      component: EditText
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Workbench from '@/components/workbench/workbench'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workbench',
      component: Workbench
    }
  ]
})

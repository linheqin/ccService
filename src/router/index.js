import Vue from 'vue'
import Router from 'vue-router'
import Workbench from '@/components/workbench/workbench'
import managementBackstage from '@/components/managementBackstage/managementBackstage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/workbench',
      name: 'Workbench',
      component: Workbench
    },
    {
      path: '/managementBackstage',
      name: 'managementBackstage',
      component: managementBackstage
    }
  ]
})

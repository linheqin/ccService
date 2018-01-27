import Vue from 'vue'
import Router from 'vue-router'
import accountCenter from '@/components/accountCenter/accountCenter'
import authorityManage from '@/components/authorityManage/authorityManage'
import businessSite from '@/components/businessSite/businessSite'
import customService from '@/components/customService/customService'
import customServiceMonitoring from '@/components/customServiceMonitoring/customServiceMonitoring'
import dataDtatistics from '@/components/dataDtatistics/dataDtatistics'
import recordCenter from '@/components/recordCenter/recordCenter'
import serviceManage from '@/components/serviceManage/serviceManage'
import setCenter from '@/components/setCenter/setCenter'

Vue.use(Router)
export default new Router({
  routes: [
    // 账号中心
    {
      path: '/',
      name: 'accountCenter',
      component: accountCenter
    },
    {
      path: '/accountCenter',
      name: 'accountCenter',
      component: accountCenter
    },
    // 权限管理
    {
      path: '/authorityManage',
      name: 'authorityManage',
      component: authorityManage
    },
    // 商家站点
    {
      path: '/businessSite',
      name: 'businessSite',
      component: businessSite
    },
    // 客户管理 
    {
      path: '/customService',
      name: 'customService',
      component: customService
    },
    // 客服监控
    {
      path: '/customServiceMonitoring',
      name: 'customServiceMonitoring',
      component: customServiceMonitoring
    },
    // 数据统计
    {
      path: '/dataDtatistics',
      name: 'dataDtatistics',
      component: dataDtatistics
    },
    // 记录中心
    {
      path: '/recordCenter',
      name: 'recordCenter',
      component: recordCenter
    },
    // 客服管理
    {
      path: '/serviceManage',
      name: 'serviceManage',
      component: serviceManage
    },
    // 设置中心
    {
      path: '/setCenter',
      name: 'setCenter',
      component: setCenter
    }
  ]
})

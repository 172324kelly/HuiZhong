import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import brand from '@/components/brand'
import course from '@/components/course'
import address from '@/components/address'
import activity from '@/components/activity'
import latestActivity from '@/components/common/latest-activity'
import mba from '@/components/mba'
import news from '@/components/news'
import reserve from '@/components/reserve'
import consult from '@/components/consult'

Vue.use(Router);//让Router装载到vue中

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/activity/latestActivity',
      name: 'latestActivity',
      component: latestActivity
    },
    {
      path: '/mba',
      name: 'mba',
      component: mba
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: reserve
    },
    {
      path: '/consult',
      name: 'consult',
      component: consult
    }
  ]
})

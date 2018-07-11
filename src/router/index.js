import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Bananna from '@/components/banannan'



import indexPage from '../page/index'
import detailPage from '../page/detail'
import orderPage from '../page/order'
import detailPublishPage from '../page/detail/publish'
import detailForcastPage from '../page/detail/forcast'
import detailCountPage from '../page/detail/count'
import detailAnasPage from '../page/detail/analysis'
Vue.use(Router)

export default new Router({
	mode: 'history',
	// base:'__dirname',
  routes: [
    {
      path: '/',
      component:indexPage
    },
    {
      path: '/order',
      component:orderPage
    },
    {
      path: '/detail',
      component: detailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: detailAnasPage
        },
        {
          path: 'count',
          component: detailCountPage
        },
        {
          path: 'forcast',
          component: detailForcastPage
        },
        {
          path: 'publish',
          component: detailPublishPage
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   components:{
    //     default:HelloWorld,
    //     a: Apple,
    //     b: Bananna
    //   }
    // },
    {
      path: '/apple',
      name: 'apple',
      component: Apple
    },
    {
      path: '/banana',
      name: 'bananan',
      component: Bananna
    }
  ]
})

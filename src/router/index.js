import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '../page/index'
import Apple from '@/components/apple'
import Bananna from '@/components/banannan'
Vue.use(Router)

export default new Router({
	mode: 'history',
	// base:'__dirname',
  routes: [
    {
      path: '/',
      component:indexPage
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

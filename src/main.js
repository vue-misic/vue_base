// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Layout from './components/layout'
// import page from './page/index'
import router from './router'
import vueResource from 'vue-resource'
Vue.use(vueResource)//不需要注册到Vue实例，它只是一个全局的方法(注册到了所有组件),不像router插件(特殊的组件而已)，他要与DOM交互，所以要注册

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  //跟组件 => layout
  render: h => h(Layout)
})

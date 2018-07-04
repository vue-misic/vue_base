<template>
  <div id="app">
     <hello :ule = 'title'>
       <p>数据</p>
       <div slot="header">
         <p>p标签</p>
       </div>
     </hello>
     <!-- <div is='hello'></div>
     <div :is='comp'></div> -->
     <p>{{ title }}</p>
    <img src="./assets/logo.png">




    <router-view @onEvent="getMessage"> </router-view>
    <router-view name="a"> </router-view>
    <router-view name="b"> </router-view>




    <router-link to='/'> to hellow </router-link> 
    <router-link :to="{path:'/apple'}"> to apple </router-link> 
    <router-link :to='{name:"bananan"}'> to bananan </router-link> 
   
  </div>
</template>

<script>
  import hello from './components/hello'
export default {
  name: 'App',
  components: {
    hello
  },
  watch:{
    title:function (val,oldVal) {
      console.log(val,oldVal)
    }
  },
  data() {
    return{
      comp: 'hello',
      title: {
        name: 'prop prop',
        id: '554333620'
      }
      // title: '一个数据'
    }
},
  created() {
  },
  methods: {
    getMessage(params) {
      console.log(params)
    },
  }
}
</script>

<style scoped>
body{
  background: #f0f2f5;
  color: #444;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

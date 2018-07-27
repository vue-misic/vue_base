<template>
  <div id="app">
  <!--    <hello :ule = 'title'>
       <p>数据</p>
       <div slot="header">
         <p @click="isShow = !isShow">p标签</p>
       </div>
     </hello> -->
     <!-- <div is='hello'></div> -->
     <!-- <div :is='comp'></div> -->
 
  <p @click="Ttoggle">p标签</p>

    <transition name="fade" mode="out-in">
      <!--   <p v-show="isShow"> i am header </p> -->
      <div :is='comp'></div>
    </transition>    
<!-- 
    <router-view @onEvent="getMessage"> </router-view>
    <router-view name="a"> </router-view>
    <router-view name="b"> </router-view>




    <router-link to='/'> to hellow </router-link> 
    <router-link :to="{path:'/apple'}"> to apple </router-link> 
    <router-link :to='{name:"bananan"}'> to bananan </router-link>  -->
   
  </div>
</template>

<script>
  import compA from './components/apple.vue'
  import compB from './components/banannan'
export default {
  name: 'App',
  components: {
    compA,
    compB
  },
  watch:{
    title:function (val,oldVal) {
      console.log(val,oldVal)
    }
  },
  data() {
    return{
      comp: 'comp-a',
      isShow: false,
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
    Ttoggle() {
      if(this.comp === 'comp-a') {
        this.comp = 'comp-b'
      }
      else {
         this.comp = 'comp-a'
      }
    }
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
.fade-enter-active, .fade-leave-active {
  transition: all 5s;
}
.fade-enter{
  transform: translateX(10px);
}
.fade-leave-active{
  transform: translateY(100px);
}
</style>

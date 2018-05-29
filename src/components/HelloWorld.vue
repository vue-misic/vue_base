<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p v-text='message' @click="emitMessage"></p>
    <input type="radio" value="apple" v-model="myBox">
    <input type="radio" value="banner" v-model="myBox">
    <input type="radio" value="painer" v-model="myBox">

    <select name="" id="" v-model="selection" >
      <option :value="item.value"  v-for="item in list">{{ item.text }}</option>
    </select>
    <p>{{ selection }}</p>
    <p>{{ myBox }}</p>
    <!-- <input type="text" v-model.lazy="me">{{ me }}
    <input type="text" v-model.number="me">{{ typeof me }} -->
    <input type="text" v-model.trim="me">{{ me }}
    <p>{{ getMsg}}</p>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App write busy app',
      message: 'HelloWorld',
      myBox: '',
      me:'',
      selection:null,
      list: [
       {value: 1,text:'apple'},
       {value: 2,text:'banner'},
       {value: 3,text:'hahah'},
      ]
    }
  },
  watch:{
    'me'(val,oldval) {
      // console.log(val,oldval)
      this.msg = 'OK'
    }
  },
  computed: {
    getMsg() {
      return 'HelloWorld'
    }
  },
  mounted() {
    console.log(this.$router);
    console.log(this.$route);
  },
  methods:{
    emitMessage() {
      this.$emit('onEvent',this.message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

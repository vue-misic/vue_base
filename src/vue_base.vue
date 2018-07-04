<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
<script>
	//vue自身的Api vue.extend vue.set vue.use vue.component 
	//vue 自身内置组件 router-view transition component
	 /**
	 * vue基础遗漏
	  1.v-bind => :  绑定标签属性的时候(变量) 在data里去定义
	  2.特殊的两个属性 class && style
	  :class =>  1. 变量 ：class = 'stu' stu是变量
	             2. 对象： ：class => '{name: '变量'} 这里的变量只有两个值(boolean true false)
	             3. 数组： ：class => '[a,b]' 如果 a,b 在data里没有定义，则会被当成属性值字符串，当成属性值
	             若在data里定义了则会当成变量或对象  若是变量 则是 a=> 的值 b=> 的值，若是对象则如果值为true就有这个值
	             (总结来说，如果是变量class则是变量,若是对象则是为true的那属性) ，数组是他们的混合


	   3.style =>  要么是变量(如果是变量则前面的属性要为真实的class属性) 要么是对象 数组就是(多个对象的集合)

	   4.v-for ： 可以循环数组 (item,index) in list  可以循环对象 (value,key) in list 可以循环组件，复制组件，传值

	   5.v-if,v-show,v-else v-if删除DOM v-show display:none;隐藏DOM

	   6.v-on:1.click/@click 添加浏览器默认事件  => 事件修改器   @click.stop (阻止冒泡事件)
	          2.keydown 键盘输入事件， @keydown.enter 才会去执行事件


	          父子组件的数据传递

	          父级 -> 子级  props     在子组件上自定义属性 并将父组件要传递的数据 赋值给子组件上的自定义属性 :data = 'data'

	          子级 -> 父级 全球事件总成 golbal event   父级在子组件上自定义一个事件，在子组件的某个click事件触发父级定义在子组件的自定义事件 @myEvent = 'onEmit' 子组件 @click = 'emit' emit() { this.$emit('myEvent','参数')}

       7. v-model (表单提交的是value 视图层显示的之hi文本, input=> checkbox radio select 选中值就是value) 表单双向绑定数据 input的输入框  cheecked(选中为true,需要用数组来接收它的value) radio select option 选中value就是 就是v-model的值

       8.v-model的修饰器 v-model.lazy(input 点enter或者移出文本框才可以显示input的value) v-model.number input的value值为数字 v-model.trim 前后裁剪前后空格

       9.计算属性 computed: {} 是一个对象，里面定义的函数是要求return 返回值 => 特点 放在comptued 里和放在data里定义的参数变量一样  2. 一版用于对data里的数据二次处理 3.与methods 区别是根据依赖进行缓存，只有依赖值变化次才会出发该函数，methods 每调用一次就会重新获取一遍data里的值

       10.wath 是对象 监听属性  监听的是某个Key 的变化, 一旦变化执行某项操作  一般这个KEY在data里有定义，操作也是对data里的数据进行处理  wath:{ 'key'() {
	     它会默认接受一个新值和旧直
       }}

       11.组件的使用(组件树) 跟组件 + n个子组件 => 项目单文件 (实例只创建一次，其他组件以配置文件形式引入)
        在父组件中使用子组件首先要导入 子组件 , 然后在父组件中的components中去注册, 然后在Html里写入组件的标签

        1.最好用comp-a形式引入
        2.使用div或者p标签 <div is='comp-a'></div>  动态的添加组件 <div :is='comp'></div> 在data 定义变量 comp : 'comp-a'
        3.动态is切换组件可以使用<keep-live></keep-live> 进行缓存起来

        12. 父子组件的数据传递方式   父级 -> 子级 props  (在子组件上自定义属性(不可以用驼峰命名)= 父级data里的数据)
                props 在子组件里声明可以直接使用(像data里的数据一样使用)
                1.props是数组 props:['my-val'] => 是字符串，在组件上定义什么就是什么 不转换myVal
                  一般用于不需要有默认值的用 数组 字符串形式
                2.props 是对象 props:{
                	  'my-val': Number/[String/Object] 没有default时只定义内用内型
	                  myVal:{ type: String,default: '100'} => myVal此刻充当变量
                }  需要转换为驼峰

                需要有默认值的一般用对象 属性的形式




                                   子级 -> 父级 $emit $on (在子组件上 自定义事件v-on监听(不可以用驼峰命名,触发的事件必须完全匹配监听的事件名,不存在大小写转换,推荐始终使用 kebab-case 的事件名), 子组件浏览器事件去触发)

                prop 是单项数据流, 子组件不可以更改父组件的值，不然会侦测不到数据的改变

                父级 => 子级 prop 传递属性  子级 => 父级    $emit 发布

        13.插槽 => slot 父组件向子组件分发模板内容( 父组件 => 子组件可以传递数据(prop)/模板(slot)) 例如：弹框组件
                   1.slot必须在子组件里定义，不然父组件传递，子组件不生效
                   2.父组件分发的内容模板需要在子组件标签内使用  <comp-a> <p>分发内容</p> </comp-a>
                   3.默认内容如果没有传递内容，可以使用默认 <slot> no content </slot>
                   4.具名插槽 子组件<slot name="header"> </slot>  父组件<p slot="hedader"> </p>
                   5.slot里可以放template模板可以放很多标签  <p><span></span></p> 
	 */
     





     /**

        vue 高级功能

        1.过渡/动画 (vue的transtion的出发 1.v-if/v-show 2.router的切换 3.动态组件的切换)


        2.插件(vue-resource vue-router vuex) => 是独立于vue,拓展完善vue生态(库)，是一套完整的系统
          npm install vue-router --save (--save的目的是保存在package.json)
          使用步骤

          1.引入  import vueRouter from 'vue-router'(如果引入的是vue配置文件则是写路径：./app或者./api.js,如果是插件则是'vue/vue-router',它是一整套完整的生态系统)

          2.vue.use(vueRouter) ,引用注册,全局都放在main.js（通过全局方法 Vue.use() 使用插件)

          3.初始化实例 let router = new vueRouter({}) (vue-resourse 不需要实例化,因为直接封装的ajax,不需要配置选项)
          

          vue-router(前端路由) 不同地址跳转不同页面
          三个点 1.map => 什么样地址访问什么页面 (路径对应的页面(组件),映射关系)
                  routes 是一个数组
                2.router-view => 页面(组件)显示在哪里
                <router-view></router-view> 内置组件
                3.router-link => 如何跳转(点击哪里进行跳转)
                    <router-link to='/home'></router-link>(渲染为a标签)
                    <router-link :to='{path:"/home"}'></router-link>(渲染为a标签)
                    挂载到Vue实例的选项里
                for example: const router = new Router({
                  routes: [
                    {
                      path:'/home',
                      component: Home(组件)
                    }
                  ]
                })

                注意使用this.$router和this.$route的区别

                1.他this.$router.push() => 是VueRouter实例 想要导航到不同URL，则使用$router.push方法，this.$router.back()

                2.this.$route为当前router跳转对象里面可以获取name、path、query、params等
                  this.$route.query(?后面的参数)
                  this.$route.params(为/后面的动态参数)
                3.嵌套路由
                  在<router-view></router-view>的顶级出口里还可以嵌套路由

                  如 const user = Vue.exted(
                      'my-router': {
                          template:`
                            <div>
                              router-view
                            </div>
                          `
                      }
                  )

                  在某个嵌套路由下需要这样配置

                  routes: [
                    {path: '/home',component: Home,children:[
                      children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由
                      children跟routes一样是一个路由映射个关系
                      {path:'foo',component:Foo}
                      以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。


                      {path:'',component: Boo}
                      当你访问 /user/foo/ 时，User 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的子路由：
                    ]},

                  ]

                  编程式导航

                  声明式 =>  1.字符串 <router-link to="/home">
                            2. 对象 <router-link :to="{path:'/home'}">
                            3. 路由命名 <router-link :to="{name:'hmoe',params:{id:123}}">
                            (声明式如果配置了  如果提供了 path，params会被忽略)

                  编程式 => 1.字符串 this.$router.push('home')
                            2. 对象 this.$router.push({path:'/home${id}'}) => es6方法加进去
                            3. 路由命名 this.$router.push({name:'home',params:{id:123})">
                            (声明式如果配置了  如果提供了 path，params会被忽略)
                            4.this.$router.push()有历史记录 this.$router.replace() 回去掉历史记录

                 API => <router-link tag = 'li'> => 默认是a标签 tag渲染为li标签
                        当路由被点击会自动添加一个类(默认值"router-link-active") 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置


          4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。


     */


     /*
        vue项目初始化 全局安装 vue-cli(脚手架)   npm install vue-cli -g 
        vue脚手架安装完成 使用模板 vue init webpack my-project
        安装依赖 运行项目 npm install会多出node_moudles目录

        npm run dev 启动项目
        npm run build 打包
     */
     /*
      mock数据，(json-server只能获取get请求)
      npm install json-server --save
      1.在build的目录下的server中添加数据配置
      2.var jsonServer = require('json-server')
      3.代理,在config里的index设置dev的代理访问api => 'http://localhost:8081'
      4.在apiRouter也要进行api配置

      图片的引入：webpack打包需require引入不然不认识
      什么时候需要在(srcript标签里,data选项里引入的src) 可以理解为src是变量就需要require，不然webpack打包不认识
      template&&css知道那是图片路径，但是js不知道是图片路径还是字符串，打包就会出问题
      */
	
</script>
</html>
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
	     它会默认接受一个新值和旧值
       }}

       11.组件的使用(组件树) 跟组件 + n个子组件 => 项目单文件 (实例只创建一次，其他组件以配置文件形式引入)
        在父组件中使用子组件首先要导入 子组件 , 然后在父组件中的components中去注册, 然后在Html里写入组件的标签

        1.最好用comp-a形式引入
        2.使用div或者p标签 <div is='comp-a'></div>  动态的添加组件 <div :is='comp'></div> 在data 定义变量 comp : 'comp-a'
        3.动态is切换组件可以使用<keep-live></keep-live> 进行缓存起来

        12. 父子组件的数据传递方式   父级 -> 子级 props  (在子组件上自定义属性(不可以用驼峰命名)= 父级data里的数据)
                props (数组或者对象) 在子组件里声明可以直接使用(像data里的数据一样使用)
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
            由初始值切换为true是动态的添加class为 v-enter, v-enter-active
            切换为初始值为false时为v-leave, v-leave-active
            v-enter-active,v-leave-enter => 定义过渡曲线
            v-enter,在刚进入时(ture时) => 定义transform 
            v-leave-active,在退出为false时 => 定义最后离开那一帧的class应用的样式
            (enter是刚进入给了一个transform,慢慢恢复为正常状态，leave是将要结束的那一时刻给了一个transforms是要求该元素属性另外一个状态(与元素一起消失掉))
            这就恰恰是为什么 enter-active是 ture 因为他要显示时要有正常的一个状态，leave-active 非正常状态与false一起消失(如果直接在leave设置，那一帧就消失了transition就没法生效了，太快了)
            组件是一个组件的离开时leave，一个组件的进入是enter 
            一个思路就是将要消失的看不见的是leave,显示的将要显示的可以看见的是enter
            transition name="fade" => 区分不同的动画  mode="out-in"/"in-out" 先出后进/定义新进后出(默认) => 只有组件才会用到这些才有视觉效果


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
                for example: const router = new vueRouter({
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

                  编程式导航(路由如何跳转的处理)

                  声明式 =>  1.字符串 <router-link to="/home">
                            2. 对象 <router-link :to="{path:'/home'}">
                            3. 路由命名 <router-link :to="{name:'hmoe',params:{id:123}}">
                            (声明式如果配置了  如果提供了 path，params会被忽略)

                  编程式 => 1.字符串 this.$router.push('home')
                            2. 对象 this.$router.push({path:'/home?${id}'}) => es6方法加进去
                            3. 路由命名 this.$router.push({name:'home',params:{id:123})">
                            (声明式如果配置了  如果提供了 path，params会被忽略)
                            4.this.$router.push()有历史记录 this.$router.replace() 回去掉历史记录


                            this.$router 访问路由器， this.$route 访问当前路由：

                 API => <router-link tag = 'li'> => 默认是a标签 tag渲染为li标签
                        当路由被点击会自动添加一个类(默认值"router-link-active") 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置


          4.添加 Vue 实例方法，通过把它们添加到 Vue.prototype(原型) 上实现。


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

      组件幻灯片(轮播图)思路
      1.动态的添加img的src就会有切换的效果
      2.定义切换的共有方法，处理两个极端，开始和结束(使用计算属性(return index))
      3.使用setInterval执行点击事件，当鼠标移入清除定时器，溢出再执行


      注意，position 一定不要漏掉top/left任一值
          设置一层可以单独控制点击屏幕区域的全屏,不包裹弹框，z-index层级低一些能实现这种效果


      arrt是一个变量值,ture，如果想操作的不是这个值而是这个变量，那就把变量以字符串形式传进来，然后已[]去访问修改这个变量
      不是用形参赋值，而是想操作这个形参，那只能以字符串形式将变量名传入，然后用[]方式访问赋值


      路由配置(子路由配置)
      以 / 开头的嵌套路径会被当作根路径。子路由就不要配'/'了=> 顶级路由出口
      路径与组件存在映射关系(只有匹配到了routerview才会为出口)
      嵌套路由:在<router-view></router-view>的顶级出口里还可以嵌套路由<router-view></router-view>
      它会自动到子路由找router-view


      v-for最好与:key一起使用作为标识提高性能
      便它可以跟踪每个节点的标识，从而重用和重新排序现有元素，您需要key为每个项目提供唯一属性。理想的值key是每个项目的唯一ID。这个特殊属性与track-by1.x中的粗略等价，但它的作用类似于属性，因此您需要使用v-bind它将其绑定到动态值（在此使用速记）：


      select组件 => 
        prop的默认值需要跟传过来的值数据保持一致，这样v-for的时候：key才会不会有异常,
        selections[nowIndex] => 尝试与index绑定关系
        组件的点击不把数据传递出去时没有意义=>

      choose组件(多选实现实现方式) => 用数组来储存，使用array.indexOf(index)与index建立联系
      插件lodash的方法 _.remove(arr,(idx) => {
          return idx !== index  idx参数是数组中的元素  类似splice得到的新数组
      })
      _.map(arr,(idx) => {
        return arr(idx) => 返回数组中有idx值的新数组
      })

      
      多个组件触发同一监听事件可以用this[''] 传不同的参数来区分操作哪一个组件对应父组件值的改变
      对象的访问 => obj.name => name是属性名   obj['name'] => name是属性名用[]要以字符串形式访问
      另外子组件向父组件传参默认只传一个参数，若传其他参数则 父组件接受则 change('arrt', $event) 使用$event将子组件的参数注入


      使用原生的express设置代理可以完成请求(get,post)都可以


      组件嵌套太多层组件会不容易将参数传递给最顶级父级，所以要避免这样的情况，结构需要可以使用父级向子组件加入插槽，将另一
      组件引入到父级组件然后插入子组件，这样避免的组件的参数传递(多级)问题(这个插槽是属于父级的元素)
      因为组件的$emit()是在组件的template里触发的

        组件中引入组件触发只能一层一层的去触发,发布通知到最外层的父组件，例如checkOrder组件引入了mydialog组件
        (vue的原则是在哪里创建就在哪里修改)


        父子间通信为 父-->子 props  子-->父 $emit (介质，props.$emit)  => 其实是订阅发布的简写  父组件$on放在了标签，转移到了处理函数放在了methods(没有直接放在mounted的里直接去处理  $on('同一事件名'),处理函数)
        非父子(如兄弟之间) 通信, 发布订阅模式 eventBus  
        创建中介层介质是 一个新vue实例 eventBus = new Vue() 导出
        发布(浏览器点击事件，不是交给this去发布了，交给了中间的新vue实例Bus去发布)，类似子组件 浏览器click原生事件 在methods里去定义发布 this.$emit('事件', 参数)
        订阅，在mounted里去监听$on('事件',处理函数(message) => {
  
        })
        


          简单情况下我们可以通过使用一个空的Vue实例作为中央事件总线
      */
	
</script>
</html>
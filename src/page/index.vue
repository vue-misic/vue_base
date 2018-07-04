<template>
	<div class="index">
		<!-- 
			左侧
		 -->
		<div class="index-left">

			<div class="index-left-block">
				<h2>全部产品</h2>
				<!-- 
					可以使用vue自带的template模板来循环，同级
					v-for循环对象(value,key) in item, value是指属性值
				 -->
				<template v-for="product in productList">
					<h3>{{ product.title }}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div class="hr" v-show="!product.last"></div>
				</template>
				
				<!-- <h3>应用类</h3>
				<ul>
					
				</ul> -->
			</div>

			<div class="index-left-block lastest-news">
				<h2>最新消息</h2>
				<ul>
					<li v-for="item in newsList" >
						<a :href="item.url" class="new-item">{{ item.title }}</a>
					</li>
				</ul>
			</div>

		</div>
		<!-- 
			右侧
		 -->
		<div class="index-right">
			<!-- 
				轮播图组件
				src是变量需要require
			 -->
			<slider :slide="slides" :inv="speed"></slider>

			<div class="index-board-list">
				<!-- 
					动态的添加class用到了数组和对象的混合
					ES6字符串模板${}
				 -->
				<div 
					v-for="(item,index) in boardList" 
					class="index-board-item"
					:class="[{'line-last':index % 2 !== 0},`index-board-item${index}`]"
					>
					<!-- 
						利用padding将盒子向左撑开,背景图可以正常展示
					 -->
					<div 
						class="index-board-item-inner"
						>
						<h2>{{ item.title }}</h2>
						<p>{{ item.description}}</p>
						<div class="index-board-button">
							<a href="#" class="button">立即购买</a>
						</div>
					</div>
					
				</div>
			</div>

		</div>
	</div>
</template>
<script>
	import slider from '../components/slider';
	export default{
		name:'index',
		data() {
			return{
				productList: {
			        pc: {
			          title: 'PC产品',
			          list: [
			            {
			              name: '数据统计',
			              url: 'http://starcraft.com'
			            },
			            {
			              name: '数据预测',
			              url: 'http://warcraft.com'
			            },
			            {
			              name: '流量分析',
			              url: 'http://overwatch.com',
			              hot: true//是否展示标记
			            },
			            {
			              name: '广告发布',
			              url: 'http://hearstone.com'
			            }
			          ]
			        },
			        app: {
			          title: '手机应用类',
			          last: true,//分隔符标记，是否展示
			          list: [
			            {
			              name: '91助手',
			              url: 'http://weixin.com'
			            },
			            {
			              name: '产品助手',
			              url: 'http://twitter.com',
			              hot: true
			            },
			            {
			              name: '智能地图',
			              url: 'http://maps.com'
			            },
			            {
			              name: '团队语音',
			              url: 'http://phone.com'
			            }
			          ]
			        }
		      	},
		      	newsList: [],
		      	boardList: [
			        {
			          title: '开放产品',
			          description: '开放产品是一款开放产品',
			          id: 'car',
			          toKey: 'analysis',
			          saleout: false
			        },
			        {
			          title: '品牌营销',
			          description: '品牌营销帮助你的产品更好地找到定位',
			          id: 'earth',
			          toKey: 'count',
			          saleout: false
			        },
			        {
			          title: '使命必达',
			          description: '使命必达快速迭代永远保持最前端的速度',
			          id: 'loud',
			          toKey: 'forecast',
			          saleout: true
			        },
			        {
			          title: '勇攀高峰',
			          description: '帮你勇闯高峰，到达事业的顶峰',
			          id: 'hill',
			          toKey: 'publish',
			          saleout: false
			        }
			    ],
			    slides: [
			        {
			          src: require('../assets/slideShow/pic1.jpg'),
			          title: 'xxx1',
			          href: 'detail/analysis'
			        },
			        {
			          src: require('../assets/slideShow/pic2.jpg'),
			          title: 'xxx2',
			          href: 'detail/count'
			        },
			        {
			          src: require('../assets/slideShow/pic3.jpg'),
			          title: 'xxx3',
			          href: 'http://xxx.xxx.com'
			        },
			        {
			          src: require('../assets/slideShow/pic4.jpg'),
			          title: 'xxx4',
			          href: 'detail/forecast'
			        }
			      ],
			      speed: 1500
			}
		},
		components: {
			slider
		},
		created() {
			this.$http.get('/api/getNewsList')
			.then((res) => {
				this.newsList = res.body
			},(err) =>{
				console.log(err)
			})
		},
		methods:{
		}
	}
</script>
<style scoped>

	.index{
		width: 1200px;
	    margin: 0 auto;
	    overflow: hidden;
		display: flex;
		color: #b2b2b2;
	}
	.index-left{
		flex: 300px 0;

	}
	.index-left-block{
		margin: 15px;
    	background: #fff;
    	box-shadow: 0 0 1px #ddd;
	}
	.index-left h2{
		background: #4fc08d;
	    color: #fff;
	    padding: 10px 15px;
	    margin-bottom: 20px;
	}
	.index-left h3{
		font-size: 14px;
		padding: 0 15px 5px 15px;
	    font-weight: bold;
	    color: #222;
	}
	li{
		font-size: 10px;
		padding: 5px 25px;
	}
	.hr{
		margin-top: 20px;
		margin-bottom: 20px;
		height: 1px;
	    width: 100%;
	    background: #ddd;
	}
	a{
		text-decoration: none;
		color: #b2b2b2;
	}
	.hot-tag {
		background: red;
		color: #fff;
	}
	.index-right{
		flex: 1;
	}
	.index-board-item {
	  float: left;
	  /*display: inline-block;*/
	  width: 400px;
	  background: #fff;
	  box-shadow: 0 0 1px #ddd;
	  padding: 20px;
	  margin-right: 20px;
	  margin-bottom: 20px;
	}
	.index-board-item0{
		background: url('../assets/images/1.png') left center no-repeat;
	}
	.index-board-item1{
		background: url('../assets/images/2.png') left center no-repeat;
	}
	.index-board-item2{
		background: url('../assets/images/3.png') left center no-repeat;
	}
	.index-board-item3{
		background: url('../assets/images/4.png') left center no-repeat;
	}
	.index-board-item h2 {
	  font-size: 18px;
	  font-weight: bold;
	  color: #000;
	  margin-bottom: 15px;
	}
	.line-last {
	  margin-right: 0;
	}
	.index-board-button {
	  margin-top: 20px;
	}
	.index-board-item-inner {
	  min-height: 125px;
	  padding-left: 120px;
	}
	.index-board-item-inner h2{
		font-size: 18px;
		font-weight: bold;
		color: #000;
		margin-bottom: 15px;
	}
	p{
		font-size: 16px;
		color: #000;
	}
	.button{
		background: #4fc08d;
	    color: #fff;
	    display: inline-block;
	    padding: 10px 20px;
	    cursor: pointer;
	}
	.new-item{
		white-space: nowrap;
		text-overflow: ellipsis;
		display: inline-block;
  		width: 215px;
  		overflow: hidden;
	}
</style>
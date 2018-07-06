<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img :src="productIcon" alt="" class='imgs'>
				<ul>
					<!-- 
						：key与item的唯一id作标识,理想的值key是每个项目的唯一ID
					 -->
					<router-link  :to="{path: `/detail/${item.path}`}" tag="li" v-for="(item,index) in products" active-class="on" :key="item.path">{{ item.name }}</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detail-wrap',
		data() {
			return {
				products: [
		            {
		              name: '数据统计',
		              path: 'count',
		              on: false
		            },
		            {
		              name: '数据预测',
		              path: 'forcast',
		              on: false
		            },
		            {
		              name: '流量分析',
		              path: 'analysis',
		              on: false
		            },
		            {
		              name: '广告发布',
		              path: 'publish',
		              on: false
		            }
			    ],
			    isMap: {
			    	'/detail/analysis': require('../assets/images/1.png'),
			    	'/detail/count': require('../assets/images/2.png'),
			    	'/detail/forcast': require('../assets/images/3.png'),
			    	'/detail/publish': require('../assets/images/4.png'),
			    }
			}
		},
		created() {
			// console.log(this.$route.path);
		},
		computed: {
			productIcon() {
				return this.isMap[this.$route.path];
			}
		}
	}
</script>

<style>
	.detail-wrap{
		display: flex;
		width: 100%;
  		padding-top: 20px;
  		margin-bottom: 10px;
	}
	.detail-left{
		flex: 0 200px;
		border: 1px solid #ccc;
	}
	.detail-right{
		flex: 1;
		margin-left: 20px;
		border: 1px solid blue;
	}
	.product-board {
	  background: #fff;
	  padding: 20px 0;
	}
	.product-board ul {
	  margin-top: 20px;
	}
	.product-board li {
	  text-align: left;
	  padding: 10px 15px;
	  cursor: pointer;
	}
	.product-board li.on,.product-board li:hover{
		background: #4fc08d;
  		color: #fff;
	}
	.imgs{
		margin-left: 20px;
	}
</style>
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
		              // on: false
		            },
		            {
		              name: '数据预测',
		              path: 'forcast',
		              // on: false
		            },
		            {
		              name: '流量分析',
		              path: 'analysis',
		              // on: false
		            },
		            {
		              name: '广告发布',
		              path: 'publish',
		              // on: false
		            }
			    ],
			    isMap: {
			    	'/detail/analysis': require('../assets/images/1.png'),
			    	'/detail/count': require('../assets/images/4.png'),
			    	'/detail/forcast': require('../assets/images/3.png'),
			    	'/detail/publish': require('../assets/images/3.png'),
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
.sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    position: relative;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>
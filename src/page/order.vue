<template>
	<div class="order-wrap">
		<h3>您的产品</h3>
		<div class="order-list-choose">
			<div class="order-list-option">
				<span>选择产品:</span>
				<v-selection :selections="products" @on-change="productChange"></v-selection>
			</div>
			<div class="order-list-option">
				<span>开始日期:</span>
				<!-- <calendar-input :show="true" :showCalendar="startShow" @getValue="getValueStartDate"></calendar-input> -->
				<date-picker @on-change="getValueStartDate"></date-picker>	
			</div>
			<div class="order-list-option">
				<span>结束日期:</span>
				<!-- <calendar-input :show="true" :showCalendar="endShow" @getValue="getValueEndDate"></calendar-input> -->
				<date-picker @on-change="getValueEndDate"></date-picker>	
			</div>
			<div class="order-list-option">
				<span>关键词:</span>
				<input type="text" v-model.lazy="query" class="order-query">
			</div>
		</div>
		

		<div class="order-list-table">
			<table>
				<tr>
					<th 
					v-for="item in tableHeads" 
					:key="item.key" 
					@click=changeOrderType(item)
					:class="{active: item.active}">{{ item.label }}</th>
				</tr>
				<tr v-for="order in tableData">
					<!-- <td v-for="value in order">{{ value }}</td> -->
					<td v-for="head in tableHeads">{{ order[head.key]}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	import vSelection from '../components/base/selection'
	import datePicker from '../components/base/datepicker'
	import _ from 'lodash'
	export default {
		name: 'order-wrap',
		data() {
			return {
				products: [
			        {
			          label: '数据统计',
			          value: 0
			        },
			        {
			          label: '数据预测',
			          value: 1
			        },
			        {
			          label: '流量分析',
			          value: 2
			        },
			        {
			          label: '广告发布',
			          value: 3
			        }
		      	],
		      	tableHeads: [
			        {
			          label: '订单号',
			          key: 'orderId'
			        },
			        {
			          label: '购买产品',
			          key: 'product'
			        },
			        {
			          label: '版本类型',
			          key: 'version'
			        },
			        {
			          label: '有效时间',
			          key: 'period'
			        },
			        {
			          label: '购买日期',
			          key: 'date'
			        },
			        {
			          label: '数量',
			          key: 'buyNum'
			        },
			        {
			          label: '总价',
			          key: 'amount'
			        }
			    ],
			    tableData: [],
		      	startDate: '',
		      	endDate: '',
		      	query: '',
		      	id: 0,
		      	hight: false,
		      	currentOrder: 'asc',
			}
		},
		components: {
			vSelection,
			datePicker,
		},
		watch: {
			query (val,oldVal) {
				this.getTableData();
			}
		},
		mounted () {
			this.getTableData();
		},
		methods: {
			getValueStartDate (date) {
				this.startDate = date;
				this.getTableData();
			},
			getValueEndDate (date) {
				this.endDate = date;
				this.getTableData();
			},
			productChange (product) {
				this.id = product.value;
				this.getTableData();
			},
			getTableData () {
				let reqParams = {
			        query: this.query,
			        productId: this.productId,
			        startDate: this.startDate,
			        endDate: this.endDate
			    }
				this.$http.post('/api/getOrderList', reqParams)
				.then((res) => {
					this.tableData = res.data.list;
				}, (err) => {
					console.log(res)
				})
			},
			changeOrderType (headItem) {
		      	this.tableHeads.map((item) => {
		        	item.active = false
		        	return item
		      	})
		      	headItem.active = true
		      	if (this.currentOrder === 'asc') {
		        	this.currentOrder = 'desc'
		      	}
		      	else if (this.currentOrder === 'desc') {
		        	this.currentOrder = 'asc'
		      	}
		      	this.tableData = _.orderBy(this.tableData, headItem.key, this.currentOrder)
		    }
		}
	}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
<template>
	<div class="index">
		<div class="index-left">
			<div class="upmes">
				<h1>全部产品</h1>
				<template v-for="product in productList">
					<h1>{{ product.title }}</h1>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{ item.name }}</a>
						</li>
					</ul>
				</template>
				
			</div>
			<div class="downmes">
				
			</div>
		</div>
		<div class="index-right"></div>
	</div>
</template>
<script>
	export default{
		name:'index',
		data() {
			return{
				productList: {
					pc:{
						title: 'pc产品',
						list:[
							{
								name: 'diyige',
								url: 'shusu'
							},
						]
					},
					app:{
						title: 'app应用',
						list: [

							{
								name: 'diyige',
								url: 'shusu'
							},
						]
					}

				}
			}
		},
		methods:{
		}
	}
</script>
<style scoped>
	.index{
		width: 100%;
		display: flex;
	}
	.upmes{
		border: 1px solid #ddd;
	}
	h1{
		background: #222;	
	}
	.index-left{
		flex: 300px 0;

	}
	.index-right{
		flex: 1;
	}
</style>
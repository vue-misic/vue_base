<template>
	<div>
		<this-dialog :is-show="isShowCheckDialog" @onchangDialog="closeOrder">
			请检查你的支付状态！
		    <div class="button" @click="checkStatus">
		        支付成功
		    </div>
		    <div class="button" @click="checkStatus">
		        支付失败
		    </div>
		</this-dialog>
		<this-dialog :is-show="isShowSuccessDialog" @onchangDialog="toOrderList">
			<p>购买成功</p>
		</this-dialog>
		<this-dialog :is-show="isShowFailDialog">
			<p>购买失败</p>
		</this-dialog>
	</div>
</template>

<script>
	import dialog from './mydialog'
	export default{
		props: {
			isShowCheckDialog: {
				type: Boolean,
				default: false
			},
			orderId: {
				type: [String, Number],
				default: ''
			}	
		},
		data () {
			return {
				isShowSuccessDialog: false,
				isShowFailDialog: false
			}
		},
		components: {
			thisDialog: dialog
		},
		methods: {
			closeOrder () {
				this.$emit('check-dialog')
			},
			checkStatus () {
				this.$http.post('/api/checkOrder',{
					orderId: this.orderId
				})
				.then((res) => {
					this.$emit('check-dialog')
					this.isShowSuccessDialog = true;
				}, (err) => {
					this.$emit('check-dialog');
					this.isShowFailDialog = true;
				})
			},
			toOrderList () {
				this.$router.push('/')
			}	
		}
	}
</script>

<style scoped>

</style>
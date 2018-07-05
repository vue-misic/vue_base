<template>
	<div class="mydialog">
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-cover" @click="closeMyself"></div>
			<div class="dialog-content">
				<p class="dialog-close" @click="closeMyself">X</p>
				<slot>empty</slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'mydialog',
		props: {
			isShow: {
				type: Boolean,
				default: false
			}	
		},
		methods: {
			closeMyself() {
				this.$emit('onchangDialog',this.isShow)
			}
		}
	}
</script>

<style>
	.dialog-wrap{
		position: fixed;
		width: 100%;
		height: 100%;
	}
	.dialog-cover{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 5;
		background-color: rgba(0,0,0,0.5);
	}
	.dialog-content{
		padding: 40px;
		width: 800px;
		height: 300px;
		background-color: #fff;
		position: absolute;
		top: 20%;
		left: 50%;
		z-index: 100000;
		transform: translateX(-50%);
	}
	.dialog-close{
		position: absolute;
		top: 10px;
		right: 10px;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.dialog-close:hover {
  		color: #4fc08d;
	}
</style>
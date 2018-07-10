<template>
	<div class="mydialog">
		<div class="dialog-wrap"  v-if="isShow" >
			<div class="dialog-cover" @click="closeMyself"></div>
			<transition name="drop">
				<div class="dialog-content" v-if="isShow">
					<p class="dialog-close" @click="closeMyself">X</p>
					<slot>empty</slot>
				</div>
			</transition>
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

				this.$emit('onchangDialog')
			}
		}
	}
</script>

<style>
	.drop-enter-active {
	  transition: all .5s ease;
	}
	.drop-leave-active {
	  transition: all .3s ease;
	}
	.drop-enter {
	  transform: translateY(-500px);
	}
	.drop-leave-active {
	  transform: translateY(-500px);
	}
	.dialog-wrap{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.dialog-cover{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(0,0,0,0.5);	
	}
	.dialog-content{
		padding: 40px;
		width: 800px;
		background-color: #fff;
		position: absolute;
		top: 20%;
		left: 50%;
		z-index: 5;
		border: 2px solid #464068;
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
		z-index: 3;
	}
	.dialog-close:hover {
	  	color: #4fc08d;
	}
</style>
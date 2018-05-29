<template>
 <div class="hello">
   {{ dataMess }}
   {{ ule }}

    <button @click="change">修改引用值</button>

    <slot>这是slot默认专辑</slot>
    <slot name="header"></slot>
 </div>

</template>
<script>
	export default {
		name: 'hello',
		data() {
			return{
				dataMess: 'this is children component'
			}
			
		},
		// props:['my-val']
		props:{
			// 'my-val':{
			// 	type: String,
			// }
			// 'my-val':[String]		
               ule:[String,Object]
		},
		created() {
			console.log(this.ule);
		},
		methods:{
			change() {
				// this.ule.id = '2345'
				this.ule.id = '改变了'
			}
		}

	}
</script>
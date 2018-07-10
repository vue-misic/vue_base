<template>
	<div class="choose-component">
		<ul class="chooser-list">
			<li 
			v-for="(item, index) in version" 
			:key="item.label" 
			:title="item.label"
			:class="{active: checkActive(index)}"
			 @click="toggleChooser(index)"> {{ item.label }}</li>
		</ul>
	</div>
</template>

<script>
	import _ from 'lodash';
	export default {
		name: 'choose-component',
		props: {
			version: {
				type: Array,
				default: [{
					label: '123',
					value: 0,
				}]
			}
		},
		data() {
			return {
				nowIndexs: [0],
			}
		},
		methods: {
			toggleChooser(index) {
				if(this.nowIndexs.indexOf(index) === -1) {
					this.nowIndexs.push(index);
				} 
             else {
			// 		// this.arrIntercept(index);
			// 		// console.log(this.nowIndex);

			// 		//成立则赋值,成立则截取这个值 需要传操作的数组和数组的元素
					// this.nowIndexs = _.remove(this.nowIndexes, (idx) => {
						//return 是遇到return当前函数体不执行跳出
					// 	return idx !== index;
					// })
					// console.log(this.nowIndexs);
                        // 
				this.nowIndexs = _.remove(this.nowIndexs, (idx) => {
                    return idx !== index
                })
            }
                let nowObjArray = _.map(this.nowIndexs, (idx) => {
                    return this.version[idx]
                })
                this.$emit('on-change', nowObjArray)	
			},
			checkActive(index) {
				return this.nowIndexs.indexOf(index) !== -1;
			},
			// arrIntercept(index) {
			// 	var leng = this.nowIndex.indexOf(index);
			// 	this.nowIndex.splice(leng, 1)
			// }
		}

	}
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
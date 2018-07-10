<template>
	<div class="selection">
		<div class="selection-component">
			<div class="selection-show"  @click="toggleDrop">
				<span>{{ selections[nowIndex].label }}</span>
        		<div class="arrow"></div>
			</div>
			<div class="selection-list" v-show="isDrop">
				<ul>
					<li v-for="(item, index) in selections" @click="chooseIndex(index)" :key="item.label">
						{{ item.label }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		/*
			prop的默认值需要跟传过来的值数据保持一致，这样v-for的时候：key才会不会有异常,
			selections[nowIndex] => 尝试与index绑定关系
		*/
		name: 'selection',
		props: {
			selections: {
				type: Array,
				default: [
					{
				        label: 'test',
				        value: 0
				    }
				]
			}
		},
		data() {
			return {
				isDrop: false,
				nowIndex: 0,
			}
		},
		methods: {
			toggleDrop() {
				this.isDrop = !this.isDrop;
			},
			chooseIndex(index) {
				this.nowIndex = index;
				//组件的点击不把数据传递出去时没有意义=>
				this.$emit('on-change', this.selections[index])
				this.isDrop = !this.isDrop
			}
		}

	}
</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  border: 1px solid #e3e3e3;
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
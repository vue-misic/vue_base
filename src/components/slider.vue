  <template>
	<div class="slide-show"  @mouseover="clearInv" @mouseout="runInv">
		<div class="slide-img">
			<!-- 
				利用控制索引显示不同的图片实现切换
			 -->
			<a :href="slide[nowIndex].href">
				<!-- 
					需要再理解一遍
				 -->
				<transition name="slide-trans">
		          	<img v-if="isShow" :src="slide[nowIndex].src">
		        </transition>
		        <transition name="slide-trans-old">
		          	<img v-if="!isShow" :src="slide[nowIndex].src">
		        </transition>
			</a>
		</div>
		<h2>{{ slide[nowIndex].title }}</h2>
		<ul class="slide-pages">
			<li @click="goto(preIndex)">&lt;</li>
			<li v-for="(item, index) in slide" @click="goto(index)">
				<span :class="{'on': index==nowIndex}">{{ index + 1 }}</span>
			</li>
			<li @click="goto(nextIndex)">&gt;</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'silder',
		// props: ['slide'],
		props: {
			// 'slide': [Array,String,Object]
			'slide': {
				type: Array,
				default: []
			},
			'inv': {
				type: Number,
				default: 2000
			}
		},
		data() {
			return {
				timer: null,
				nowIndex: 0,
				isShow: true
			}
		},
		computed: {
			// 这里使用计算属性更合理，因为已经有点击切换goto的切换方法直接传参来控制
			// 需要有return值
			preIndex() {
				if(this.nowIndex == 0) {
					return this.slide.length - 1;
				} else {
					return this.nowIndex - 1;
				}
			},
			nextIndex() {
				if(this.nowIndex == this.slide.length - 1) {
					console.log(this.nowIndex)
					return 0;
				} else {
					//为什么不能用++ 因为++是 this.nowIndexx = this.nowIndexx + 1 是赋值语句不是得出的数值
					 //同理 --也是一样 
					return this.nowIndex + 1;
				}	
			}
		},
		methods: {
			//公用的切换方法
			goto (index) {
				this.isShow = false;
				setTimeout(() => {
					this.isShow = true
					this.nowIndex = index;
					// this.$emit('onchange',index);
				}, 10);
				
			},
			// plus() {
			// 	if(this.nowIndex == 0) {
			// 		this.nowIndex = this.slide.length - 1;
			// 		return;
			// 	}
			// 	this.nowIndex--;
			// },
			// add() {
			// 	if(this.nowIndex == this.slide.length - 1) {
			// 		this.nowIndex = 0;
			// 		return;
			// 	}
			// 	this.nowIndex++;
			// }
			runInv () {
				var that = this;
				this.timer = setInterval(function(){
					that.goto(that.nextIndex)
				},this.inv)
			},
			clearInv () {
				clearInterval(this.timer);
			}
		},
		mounted () {
			this.runInv()
		}
	}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 350px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  line-height: 30px;
  color: #fff;
  background: rgba(0,0,0,0.5);
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  color: orange;
}
</style>
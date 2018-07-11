<template>
	<div class="pc" @click="changeBus">
		<div class="app-header">
			<div class="app-head-inner">
			<router-link to="/">
				<img src="../assets/logo.png" class="img" alt="">
			</router-link>
				<div class="head-nav">
					<div class="app-login" style="font-size: 25px;">{{ name }}</div>
					<div class="app-login" @click="logDialog" v-if="name == ''">登录</div>
					<div class="app-login" @click="quit" v-if="!name == ''">退出</div>
					<div class="app-login" @click="regDialog">注册</div>
					<div class="app-login" @click="aboutDialog">关于</div>
				</div>
			</div>	
		</div>
		<div class="app-content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>	
		</div>
		<div class="app-fotter">
			<p>© 2018  5月31号  creat by zhao </p>
		</div>


		<!-- 
			对话框 dialog组件
		 -->
		 <my-dialog :is-show="isDialogLogShow" @onchangDialog="closeDialog('isDialogLogShow')">
		 	<log-form @has-log="onSuccessLog"></log-form>	
		 </my-dialog>

		 <my-dialog :is-show="isDialogRegShow" @onchangDialog="closeDialog('isDialogRegShow')">
		 	<reg-form></reg-form>
		 </my-dialog>

		 <my-dialog :is-show="isDialogAboutShow" @onchangDialog="closeDialog('isDialogAboutShow')">
		 	<p>
				易用
				已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！

				灵活
				不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。

				高效
				20kB min+gzip 运行大小
				超快虚拟 DOM
				最省心的优化
			</p>
		 </my-dialog>

	</div>
</template>
<script>
	import dialog from './mydialog'
	import logForm from './logForm'
	import regForm from './regForm'
	import { eventBus } from '../eventBus/eventBus'
	export default{
		name:'pc',
		data() {
			return {
				isDialogLogShow: false,
				isDialogRegShow: false,
				isDialogAboutShow: false,
				name: ''
			}
		},
		components: {
			myDialog: dialog,
			logForm,
			regForm
		},
		methods: {

			logDialog() {
				this.isDialogLogShow = true;
			},

			regDialog() {
				this.isDialogRegShow = true;
			},

			aboutDialog() {
				this.isDialogAboutShow = true;
			},

			closeDialog(arrt) {
				//arrt是一个变量值,ture，如果想操作的不是这个值而是这个变量，那就把变量以字符串形式传进来，然后已[]去访问修改这个变量
				//不是用形参赋值，而是想操作这个形参，那只能以字符串形式将变量名传入，然后用[]方式访问赋值
				this[arrt] = false;
			},
			onSuccessLog (message) {
				this.name = message.username;
				if(this.name){
					this.isDialogLogShow = false;
				}
			},
			quit() {
				this.name = '';
			},
			changeBus () {
				console.log('qwe')
				eventBus.$emit('chengele','发布订阅模式')
			}
		}
	}
</script>
<style>
/* 
	created by zhao
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i,dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	text-decoration: none;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	background: #f0f2f5;
	font-size: 14px;
  	color: #444;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>

<style scoped>
html,body{
	width: 100%;
	height: 100%;
}	
.app-header{
	width:100%;
	height: 90px;
	line-height: 90px;
	background: #363636;
	color: #b2b2b2;
	
}
.app-head-inner{
	width: 1200px;
	margin: 0 auto;
}
.img{
	margin-top: 20px;
	margin: 30px;
	width: 50px;
/*	height: 50px; 图片设置宽他就会自己缩放，不要设置高*/
}
.app-content{
	width: 1200px;
	margin: 0 auto;
}
.head-nav{
	float: right;
	display: flex;
	width: 300px;
	height: 100%;
	cursor: pointer;
}
.app-login{
	font-size: 10px;
	text-align: right;
	line-height: 100px;
	width: 100px;
	height: 100px;
}
.app-fotter{
	width: 100%;
	height: 80px;
	line-height: 80px;
	text-align: center;
	background-color: #ccc;
}
</style>
<template>
	<div class="pc">
		<div class="header">
			<img src="../assets/logo.png" alt="">
			<div class="wrapper">
				<div class="app-login">登录</div>
				<div class="app-login">注册</div>
				<div class="app-login">退出</div>
			</div>
			
		</div>
		<div class="content">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>	
		</div>
		<div class="fotter">
			<p>© 2018  5月31号  creat by zhao </p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'pc'
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
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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

.header{
	width:100%;
	height: 90px;
	background: #333;
	
}
img{
	margin: 30px;
	width: 50px;
	height: 50px;
}
.wrapper{
	float: right;
	display: flex;
	width: 300px;
	height: 100%;

}
.app-login{
	font-size: 20px;
	color: #fff;
	line-height: 100px;
	width: 100px;
	height: 100px;
}
.fotter{
	width: 100%;
	height: 80px;
	line-height: 80px;
	text-align: center;
	background-color: #ccc;
}
</style>
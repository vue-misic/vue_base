<template>
	<div class="log-form">
		<div class="g-form">

			<div class="g-form-line">
				<label for="username" class="g-form-label">用户名:</label>
				<div class="g-form-input">
					<input type="text" id="username" v-model="username" placeholder="请输入用户名">
				</div>
				<span class="error g-form-error">{{ userError.errorText }}</span>
			</div>

			<div class="g-form-line">
				<label for="password" class="g-form-label">密码:</label>
				<div class="g-form-input">
					<input type="text" id="username" v-model="password" placeholder="请输入用户名">
				</div>
				<span class="error g-form-error">{{ pswError.errorText }}</span>
			</div>

			<div class="g-form-line">
				<div class="g-form-btn">
          			<a class="button" @click="onLogin">登录</a>
        		</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		name: 'log-form',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		//利用计算属性的检测v-model的值来及时的返回是否错误(符合格式)
		computed: {
			userError() {
				let status,
					errorText;
				if(!/@/.test(this.username) && this.username) {
					status = false;
					errorText = '不符合邮箱格式'
				} else {
					status = true;
					errorText = ''
				}
				return {
					status,
					errorText
				}
			},
			pswError() {
				let status,
					errorText;
				if(!/^\w{1,6}$/.test(this.password) && this.password) {
					status = false;
					errorText = '密码不是1-6位'
				} else {
					status = true;
					errorText = ''
				}
				return {
					status,
					errorText
				}
			}
		},
		methods: {
			onLogin() {
				if(!this.userError.status || !this.pswError.status) {
					alert('账号或密码错误');
				} else {
					alert('登陆成功');
				}
			}
		}
	}
</script>
<template>
	<div class="reg-form">
		<div class="g-form">
			<div class="g-form-line">
				<label for="name" class="g-form-label">账号:</label>
				<div class="g-form-input">
					<input type="text" id="name" placeholder="请输入用户名">
				</div>
			</div>
			<div class="g-form-line">
				<label for="pwd" class="g-form-label">设置密码:</label>
				<div class="g-form-input">
					<input type="text" id="pwd" placeholder="请输入用户名">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'reg-form'
	}
</script>
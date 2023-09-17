<template>
	<view class="register">
		<uni-forms ref="registerForm" :model="registerData" labelWidth="80px" :rules="registerRules" validate-trigger="bind">
			<uni-forms-item label="用户名" name="username" required>
				<uni-easyinput v-model="registerData.username" placeholder="请输入用户名" @blur="binddata('username', $event.detail.value)" />
			</uni-forms-item>
			<uni-forms-item label="密码" name='password' required>
				<uni-easyinput type="password" v-model="registerData.password" placeholder="请输入密码" @blur="binddata('password', $event.detail.value)" />
			</uni-forms-item>
			<uni-forms-item label="确认密码" name="check_password" required>
				<uni-easyinput type="password" v-model="registerData.check_password" placeholder="请重新输入密码" @blur="binddata('check_password', $event.detail.value)" />
			</uni-forms-item>
			<uni-forms-item label="电子邮件" >
				<uni-easyinput v-model="registerData.email" placeholder="请输入电子邮件" />
			</uni-forms-item>
			<uni-forms-item label="角色" name="role" required>
				<uni-data-select v-model="registerData.role" :localdata="options" placeholder="请选择角色" @blur="binddata('role', $event.detail.value)"/>
			</uni-forms-item>
		</uni-forms>

		<button type="primary" @click="submit()">提交</button>

		
	</view>
</template>

<script setup>
import { reactive, ref } from "vue"
import https from '@/axios.js'

const registerForm = ref()
const registerData = reactive({
    username: '',
    password: '',
    check_password: '',
    email:'',
    role: ''
})

const options = [
    {
        value: 'teacher',
        text: '教师',
    },
    {
        value: 'student',
        text: '学生',
    }
]

const registerRules = {
    username: {
		rules: [{
			required: true,
			errorMessage: '请输入用户名'
		},{
			minLength: 3,
			maxLength: 12,
			errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
		}]
    },
	password: {
		rules: [{
			required: true,
			errorMessage: '请输入密码'
		},{
			minLength: 3,
			maxLength: 15,
			errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
		}]
	},
	check_password: {
		rules: [{
			required: true,
			errorMessage: '请重新输入密码'
		},{
			validateFunction: function(rule, value, data, callback) {
				if (value !== registerData.password) {
					callback('两次输入密码不一致!')
				}
				return true
			}
		}]
	},
	role: {
		rules: [{
			required: true,
			errorMessage: '请选择角色'
		}]
	},
}
function submit(){
	registerForm.value.validate(obj => {
		if (obj == null){
			console.log('aa');
			https.post('/auth/register', registerData).then(res=>{
				if (res.data.code==200){
					uni.showToast({
						title: '注册成功',
						icon: 'success',
						duration: 3000
					}),
					uni.navigateBack()
				} else {
					uni.showToast({
						title: res.data.message,
						icon: 'error',
						duration: 3000
					}) 
				}
			}).catch(()=>{
				uni.showToast({
					title: '未连接到服务器',
					icon: 'error',
					duration: 3000
				}) 
			})
		}
	})
}

</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.register {
		padding: 15px;
		background-color: #fff;
	}
</style>
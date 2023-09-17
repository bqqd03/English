<template>
	<view class="item">
		<text>原密码</text>
		<uni-easyinput type="password" v-model='passwordData.old_password'  placeholder="请输入原密码" @blur='oldPassword()' />
	</view>
	<view class="item">
		<text>新密码</text>
		<uni-easyinput type="password" v-model='passwordData.new_password'  placeholder="请输入新密码" @blur='newPassword()' />
	</view>
	<view class="item">
		<text>确认密码</text>
		<uni-easyinput type="password" v-model='passwordData.check_password'  placeholder="再次填写确认" @blur='checkPassword()' />
	</view>
	
	<button type="primary" @click="submit()" class="btn-submit">提交</button>
</template>

<script setup>
import { reactive } from "vue"
import https from '@/axios.js'

let token = JSON.parse(uni.getStorageSync('token'))
let password = uni.getStorageSync('password')

const passwordData = reactive({
	old_password: '',
	new_password:  '',
	check_password: ''
})
const passwordStatu= reactive({
	old_password: true,
	new_password:  true,
	check_password: true
})

function oldPassword(){
	if(passwordData.old_password != password){
		uni.showModal({
			title: "提示",
			content:'原密码不正确',
			showCancel: false
		})
	} else {
		passwordStatu.old_password = false
	}
}
function newPassword(){
	if(passwordData.new_password.length < 3 || passwordData.new_password.length > 10){
		uni.showModal({
			title: "提示",
			content:'密码必须是3-10位的字符',
			showCancel: false
		})
	} else {
		passwordStatu.new_password = false
	}
}

function checkPassword(){
	if(passwordData.new_password != passwordData.check_password){
		uni.showModal({
			title: "提示",
			content:'两次密码不一致',
			showCancel: false
		})
	} else {
		passwordStatu.check_password = false
	}
}
function submit(){
	if (passwordStatu.old_password){
		uni.showModal({
			title: "提示",
			content:'原密码不正确',
			showCancel: false
		})
	} else if (passwordStatu.new_password){
		if(passwordData.new_password.length < 3 || passwordData.new_password.length > 10){
			uni.showModal({
				title: "提示",
				content:'密码必须是3-10位的字符',
				showCancel: false
			})
		}
	} else if (passwordStatu.check_password){
		if(passwordData.new_password != passwordData.check_password){
			uni.showModal({
				title: "提示",
				content:'两次密码不一致',
				showCancel: false
			})
		}
	} else {
		https.post('/auth/change_password',{'user_id':token.user_id,'password':passwordData.new_password}).then(res=>{
			if (res.data.code===200){
				uni.showToast({
					title: '修改成功',
					icon: 'success',
					duration: 3000
				})
				uni.clearStorageSync()
				uni.reLaunch({
					url:'/pages/login'
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
}

</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.item{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0 30rpx;
		height: 10%;
		border-bottom: 1px #eaeaea solid;
	}
	.item .uni-easyinput{
		position: fixed;
		left: 200rpx;
		width: 68%;
	}
	.btn-submit{
		margin-top: 50rpx;
		width: 85%;
	}
</style>
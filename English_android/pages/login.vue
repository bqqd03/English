<template>
	<view class="login">
		<uni-forms :model="loginData" labelWidth="80px">
			<uni-forms-item label="用户名" >
				<uni-easyinput v-model="loginData.username" placeholder="请输入用户名" />
			</uni-forms-item>
			<uni-forms-item label="密码">
				<uni-easyinput type="password" v-model="loginData.password" placeholder="请输入密码" />
			</uni-forms-item>
		</uni-forms>
		<view  class="btn-box">
			<button type="primary" @click="submit()">提交</button>
			<button @click="register()">注册</button>
		</view>
	</view>
</template>

<script setup>
import { reactive } from "vue";
import https from '@/axios.js'
import { onLoad,onShow } from "@dcloudio/uni-app"
	
const loginData=reactive({
	username:'',
	password:''
})

onShow(()=>{
	const token = uni.getStorageSync('token')
	if (token != ''){
		uni.switchTab({
			url: '/pages/home',
			success:function(){
				if (JSON.parse(uni.getStorageSync('token')).role == 'teacher'){
					uni.setTabBarItem({
						index: 2,//tabBar 的哪一项，从左边算起
						text: '班级管理',//	tab 上的按钮文字
						iconPath: "static/icons/control.png",
						selectedIconPath: "static/icons/control-selected.png"
					})
				} else if (JSON.parse(uni.getStorageSync('token')).role=='student'){
					uni.setTabBarItem({
						index: 2,//tabBar 的哪一项，从左边算起
						text: '我的班级',//	tab 上的按钮文字
						iconPath: "static/icons/class.png",
						selectedIconPath: "static/icons/class-selected.png"
					})
				}
			}
		})
	}
})

function register(){
	uni.navigateTo({
		url: '/pages/register'
	})
}

function submit(){
	https.post('/auth/login', loginData).then(res=>{
		if (res.data.code==200){
			uni.showToast({
				title: '登录成功',
				icon: 'success',
				duration: 3000
			})
			uni.setStorageSync('token',JSON.stringify(res.data.user))
			uni.setStorageSync('password',loginData.password)
			uni.switchTab({
				url: '/pages/home',
				success:function(){
					if (res.data.user.role == 'teacher'){
						// uni.setTabBarItem({
						//   index: 3,
						//   visible:false
						// })
						uni.setTabBarItem({
							index: 2,//tabBar 的哪一项，从左边算起
							text: '班级管理',//	tab 上的按钮文字
							iconPath: "static/icons/control.png",
							selectedIconPath: "static/icons/control-selected.png"
						})
					} else if (res.data.user.role=='student'){
						// uni.setTabBarItem({
						//   index: 2,
						//   visible:false
						// })
						uni.setTabBarItem({
							index: 2,//tabBar 的哪一项，从左边算起
							text: '我的班级',//	tab 上的按钮文字
							iconPath: "static/icons/class.png",
							selectedIconPath: "static/icons/class-selected.png"
						})
					}
				}
			})
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

</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.login {
		padding: 15px;
		background-color: #fff;
	}
	.btn-box{
		display: flex;
		flex-direction: row;
		margin-top: 80rpx;
	}
	.btn-box button{
		width: 35%;
	}
</style>

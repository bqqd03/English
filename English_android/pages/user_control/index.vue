<template>
	<view class="item_one" @click="userInform()">
		<image :src="avatar" class="avatar"/>
		<view class="info_box">
			<text>{{ token.username }}</text>
			<text style="margin-top: 5rpx;">{{ "ID: " + token.user_id }}</text>
		</view>
		<uni-icons type="forward" />
	</view>
	
	<view class="item_tow"  @click="score()">
		<text>我的成绩</text>
		<uni-icons type="forward" />
	</view>
	<view class="item_tow" @click="password()">
		<text>修改密码</text>
		<uni-icons type="forward" />
	</view>

	<button type="warn" style="margin-top: 80rpx;" @click="logout()">退出登录</button>
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app"

let token = JSON.parse(uni.getStorageSync('token'))
let avatar = ''

onShow(()=>{
	token = JSON.parse(uni.getStorageSync('token'))
	avatar = 'http://10.10.4.222:8080' + token.avatar
})

function userInform(){
	uni.navigateTo({
		url:'/pages/user_control/user_info'
	})
}

function password(){
	uni.navigateTo({
		url:'/pages/user_control/change_password'
	})
}

function score(){
	uni.navigateTo({
		url:'/pages/user_control/my_score/index'
	})
}

function logout(){
	uni.clearStorageSync()
	uni.reLaunch({
		url:'/pages/login'
	})
}

</script>

<style>
	page{
		background-color: #F5F5F5;
		height: 100%;
	}
	.item_one{
		display: flex;
		flex-direction: row;
		margin: 40rpx 30rpx 50rpx;
	}
	.avatar{
		width: 50px;
		height: 50px;
		margin-right: 12px;
		border-radius: 25rpx;
	}
	.info_box{
		margin-top: 15rpx;
		display: flex;
		flex-direction: column;
	}
	.item_one .uni-icons{
		margin-top: 28rpx;
		position:fixed;
		right: 40rpx;
	}
	.item_tow{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0 30rpx;
		height: 10%;
		border-bottom: 1px #eaeaea solid;
	}
	.item_tow .uni-icons{
		position:fixed;
		right: 40rpx;
	}
	
</style>
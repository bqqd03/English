<template>
	<view class="item_one" @click="avatar_change()">
		<text>头像</text>
		<image :src="avatar" class="avatar"/>
		<uni-icons type="forward" />
	</view>
	<view class="item_tow" @click="change('用户名')">
		<text>用户名</text>
		<text class="item_right">{{ token.username }}</text>
		<uni-icons type="forward" />
	</view>
	<view class="item_tow" @click="change('邮箱')">
		<text>电子邮箱</text>
		<text class="item_right">{{ token.email }}</text>
		<uni-icons type="forward" />
	</view>
	<view class="item_tow">
		<text>角色</text>
		<text class="role">{{ role }}</text>
	</view>
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app"
import { ref } from 'vue'
import https from '@/axios.js'

let token = ''
let password = uni.getStorageSync('password')
let avatar = ''
let role = ''

onShow(()=>{
	token = JSON.parse(uni.getStorageSync('token'))
	avatar = 'http://10.10.4.222:8080'+ token.avatar
	if (token.role == 'teacher'){
		role = '教师'
	} else if (token.role=='admin'){
		role='管理员'
	} else {
		role='学生'
	}
	
})

function change(item){
	uni.navigateTo({
		url:'/pages/user_control/change_info?title=' + item
	})
}

function avatar_change(){
	uni.chooseImage({
		count: 1,
		success:function(res){
			uploadPhoto(res.tempFilePaths)
		}	
	})
}


function uploadPhoto(tempFilePaths) {
	uni.uploadFile({
		url: 'http://192.168.216.105:8081/auth/set_avatar', 
		headers: {
		    'Access-Control-Allow-Origin': '*',
		},
		filePath: tempFilePaths[0], // 要上传文件资源的路径
		name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
		formData: {
		  username: token.username // 将修改后的文件名作为表单数据传递给服务器
		},
		success(res) {
			token.avatar = '/assets/images/' + token.username +'.png'
			uni.setStorageSync('token',JSON.stringify(token))
			uni.showToast({
				title: '修改成功',
				icon: 'success',
				duration: 3000
			}),
			uni.navigateBack()
		}
	})
}
	
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.item_one{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0 30rpx;
		height: 130rpx;
		border-bottom: 1px #eaeaea solid;
	}
	.item_one .uni-icons{
		position:fixed;
		right: 20rpx;
	}
	.avatar{
		width: 50px;
		height: 50px;
		position:fixed;
		right: 65rpx;
		border-radius: 25rpx;
	}
	
	.item_tow{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0 30rpx;
		height: 110rpx;
		border-bottom: 1px #eaeaea solid;
	}
	.item_right{
		position:fixed;
		right: 65rpx;
	}
	.item_tow .uni-icons{
		position:fixed;
		right: 20rpx;
	}
	.role{
		position:fixed;
		right: 35rpx;
	}
</style>
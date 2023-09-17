<template>
	<uni-nav-bar :fixed="true"  status-bar left-icon="left" :title="'修改'+title" @clickLeft="back()"/>
	
	<view class="input_box">
		<view v-if="title=='用户名'">
			<input style="border-bottom: 1px solid #000;" placeholder="请重新输入用户名" v-model="editForm.username" />
			<text>用户名在3-12字符以内</text>
		</view>
		
		<view v-if="title=='邮箱'">
			<input style="border-bottom: 1px solid #000;" placeholder="请重新输入邮箱" v-model="editForm.email" />
			<text>请输入正确的邮箱</text>
		</view>
		
	</view>
	
	<button type="primary" class="save_btn" @click="save()">保存</button>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { ref, reactive } from "vue"
import https from "@/axios.js"

let title = ref()
let token = JSON.parse(uni.getStorageSync('token'))
const editForm=reactive({
    user_id:'',
    username:'',
    email:''
})

onLoad(e=>{
	title.value = e.title
	editForm.user_id = token.user_id
	editForm.username = token.username
	editForm.email = token.email
})

function save(){
	https.post('/auth/user_edit', editForm).then(res=>{
		if (res.data.code===200){
			token.username = editForm.username
			token.email = editForm.email
			uni.setStorageSync('token',JSON.stringify(token))
			uni.showToast({
				title: '修改成功',
				icon: 'success',
				duration: 3000
			}),
			uni.navigateBack()
		} else {
			uni.showModal({
				title: "提示",
				content: res.data.message,
				showCancel: false
			})
		}
	})
}

function back(){
	uni.navigateBack()
}

</script>

<style>
	page{
		background-color: #F5F5F5;
		height: 100%;
	}
	.input_box{
		margin: 35rpx 40rpx;
	}
	.save_btn{
		width: 80%;
		border-radius: 40rpx;
	}
</style>
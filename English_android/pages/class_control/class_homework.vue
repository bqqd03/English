<template>
	<view style="margin-top: 30rpx;justify-content: space-between;display: flex;">
		<button style="width: 181rpx;" type="primary" size="mini" @click="addHomework()">添加作业</button>
		<button style="width: 181rpx;background-color: Orange;" type="primary" size="mini">分数汇总</button>
	</view>
	
	<view v-for="item in homeworkClass">
		<uni-card>
			<view>
				<text style="font-size: 40rpx;font-weight: 600;margin-left: -15rpx;color: black;">{{ item.homework_name }}</text>
				<button size="mini" type="primary" style="width: 100rpx;padding-left: 10rpx;padding-right: 10rpx;float: right;" @click="options()">操作</button>
				<view style="margin-left: -15rpx;margin-top: 5rpx;display: flex;flex-direction: column">
					<text>{{ '截止于 '+item.end_date.slice(0,16) }}</text>
					<text style="margin-bottom: 5rpx;">{{ ' 创建者：' + name }}</text>
				</view>
				
			</view>
			
		</uni-card>
	</view>
	
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import https from '../../axios.js'
import { reactive, ref } from "vue"
import common from "@/common/js/common.js"

let homeworkClass=ref()
let name=ref()
let class_id=ref()

onLoad(e=>{
	name.value = e.teacher_name
	class_id.value = e.class_id
	https.post('/teacher/class_homework',{'class_id':e.class_id}).then(res=>{
		homeworkClass.value=res.data
	}).catch(()=>{
		ElMessage.error('未连接到服务器')
	})
})
function addHomework(){
	uni.navigateTo({
		url: '/pages/class_control/addHomework?class_id=' + class_id.value
	})
}
function options(){
	uni.showActionSheet({
		itemList: ['修改','删除'],
		success: (item) => {
			console.log(item);
		}
	})
}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.num_btn{
		width: 123rpx;
		height: 123rpx;
		line-height: 1.5;
		padding-top: 18rpx;
		font-size: 30rpx;
		border: 1px #eaeaea solid;
	}
	
</style>
<template>
	<view style="margin-top: 30rpx;justify-content: space-between;display: flex;">
		<button style="width: 165rpx;" type="primary" size="mini">添加作业</button>
		<button style="width: 165rpx;background-color: Orange;" type="primary" size="mini">分数汇总</button>
	</view>
	
	<view v-for="item in homeworkClass">
		<uni-card>
			<view style="display: flex;flex-direction: column;">
				<text style="font-size: 30rpx;font-weight: 600;">{{ item.homework_name }}</text>
				<text>{{ '截止于 '+item.end_date + ' 创建者：' + name }}</text>
			</view>
			<view>
				<button>{{ item.submit_num + '已交' }}</button>
				<button>{{ item.noSubmit_num + '未交' }}</button>
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

onLoad(e=>{
	name.value = e.teacher_name
	https.post('/teacher/class_homework_android',{'class_id':e.class_id}).then(res=>{
		homeworkClass.value=res.data
		console.log(homeworkClass.value[0]['submit_num']);
		
	}).catch(()=>{
		ElMessage.error('未连接到服务器')
	})
})
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
</style>
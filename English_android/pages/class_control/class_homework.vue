<template>
	<view style="margin-top: 30rpx;justify-content: space-between;display: flex;">
		<button style="width: 165rpx;" type="primary" size="mini" @click="addHomework()">添加作业</button>
		<button style="width: 165rpx;background-color: Orange;" type="primary" size="mini">分数汇总</button>
	</view>
	
	<view v-for="item in homeworkClass">
		<uni-card>
			<view style="display: flex;flex-direction: column;float: left">
				<text style="font-size: 30rpx;font-weight: 600;">{{ item.homework_name }}</text>
<!-- 				<text>{{ '开始于 '+item.start_date }}</text> -->
				<text>{{ '截止于 '+item.end_date }}</text>
				<text>{{ ' 创建者：' + name }}</text>
			</view>
			<view style="flex-direction: row;display: flex;margin-top: 15rpx;width: 250rpx;float: right;margin-top: -5rpx;">
				<button class="num_btn" >
					<text style="color: forestgreen;">{{ item.submit_num +' 人' }}</text>
					<text>{{ '已交' }}</text>
				</button>
				<button class="num_btn">
					<text style="color: crimson;">{{ item.noSubmit_num +' 人' }}</text>
					<text>{{ '未交' }}</text>
				</button>
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
	https.post('/teacher/class_homework_android',{'class_id':e.class_id}).then(res=>{
		homeworkClass.value=res.data
		console.log(homeworkClass.value[0]);
		
	}).catch(()=>{
		ElMessage.error('未连接到服务器')
	})
})
function addHomework(){
	uni.navigateTo({
		url: '/pages/class_control/addHomework?class_id=' + class_id.value
	})
}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.num_btn{
		width: 118rpx;
		height: 118rpx;
		line-height: 1.5;
		padding-top: 15rpx;
		font-size: 30rpx;
		border: 1px #eaeaea solid;
	}
</style>
<template>
	<view v-for="item in result" class="box" @click="detail(item)">
		<view class="box_left">
			<text class="essay_title">{{ item.essay_title}}</text>
			<text style="font-size: 28rpx;margin-top: 20rpx;color: #808080;">{{ item.current_time}}</text>
			<view style="font-size: 28rpx;margin-top: 3rpx;color: #808080;">
				<text style="margin-right: 10rpx">{{ '难度  ' + item.grade}}</text>
				<text >{{ '第 ' + item.exercise_num + ' 次' }}</text>
			</view>
			<text style="font-size: 28rpx;margin-top: 3rpx;color: #808080;">{{ '耗时  ' + item.time}}</text>
		</view>
		
		<text class="score">{{ item.score + '分'}}</text>
	</view>
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app"
import { ref } from "vue"
import https from '@/axios.js'

let result = ref()

onShow(()=>{
	https.post('/english/exercise_result',{'user_id':JSON.parse(uni.getStorageSync('token')).user_id}).then(res=>{
		timeChange(res.data)
		result.value = res.data
	})
})

function timeChange(data) {
	for (let i=0;i<data.length;i++){
		const temp = data[i].time
		const minutes = Math.floor(temp / 60)
		const seconds = temp % 60
		data[i].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
	}
}

function detail(item){
	uni.navigateTo({
		url:'/pages/user_control/my_score/detail?essay_id=' + item.essay_id + '&exercise_num=' + item.exercise_num + '&grade=' + item.grade
	})
}

</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.box{
		background-color: #fff;
		border-bottom: 2px #eaeaea solid;
		padding-top: 35rpx;
		padding-left: 50rpx;
		padding-bottom: 25rpx;
		display: flex;
		flex-direction: row;
	}
	.box_left{
		display: flex;
		flex-direction: column;
	}
	.score{
		color: Crimson;
		margin-left: 80rpx;
		margin-top: 70rpx;
		font-size: 35rpx;
	}
	.essay_title{
		font-size: 38rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 500rpx;
	}
</style>
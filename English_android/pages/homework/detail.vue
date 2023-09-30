<template>
	<view v-for=" item in sentence_list" class="box">
		<view v-for=" word in item" class="box_sentence">
			<text v-if="word.type=='normal'" >{{ word.text }}</text>
			<text v-if="word.type=='correct'" style="color: ForestGreen">{{ word.text }}</text>
			<text v-if="word.type=='wrong'" style="color: crimson" >{{ word.text }}</text>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { ref } from "vue"
import https from "@/axios.js"

let sentence_list=ref()
onLoad(e=>{
	https.post('/student/content_result',{
		'homework_id':e.homework_id, 
		'user_id':JSON.parse(uni.getStorageSync('token')).user_id}
	).then(res=>{
		sentence_list.value = res.data
	})
})
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.box{
		background-color: #fff;
		border-bottom: 2px #eaeaea solid;
		padding: 50rpx 50rpx 40rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-bottom: 10rpx;
		margin-top: 10rpx;
	}
	.box_sentence {
		margin: 0 3rpx;
		font-size: 18px;
		display: flex;
	}
</style>
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
	https.post('/english/content_result',
		{
			'user_id':JSON.parse(uni.getStorageSync('token')).user_id,
			"essay_id":e.essay_id,
			"exercise_num":e.exercise_num,
			'grade':e.grade
		}
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
	}
	.box_sentence {
		margin: 0 3rpx;
		font-size: 18px;
		display: flex;
	}
</style>
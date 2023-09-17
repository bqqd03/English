<template>
	<view class="box">
		<uni-card v-for=" item in sentence_list">
			<view>
				<text style="font-size: 18px;">{{ '第 '+(item.sen_id)+' 句' }}</text>
			</view>
			<view style="margin-bottom: 10rpx;margin-top: 5rpx; display: flex;justify-content: space-between;">
				<text style="color: RoyalBlue;">{{'开始时间：' + item.audio_start }}</text>
				<text style="color: crimson;">{{'结束时间：' + item.audio_end }}</text>
			</view>
			<text>{{ item.article }}</text>
		</uni-card>
	</view>
	<view class="control">
		<!-- <image src="/static/icons/back.png" style="width: 35px;height: 35px;margin-right: 8px;" @click="back()"/> -->
		<image v-if="options.isPlay==true" src="/static/icons/play.png" style="width: 35px;height: 35px;"  @click="pause_audio()"/>
		<image v-if="options.isPlay==false" src="/static/icons/pause.png" style="width: 35px;height: 35px;" @click="play_audio()"/>
		<!-- <image src="/static/icons/forward.png" style="width: 35px;height: 35px;margin-left: 8px;" @click="forward()"/> -->
	  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { reactive, ref } from "vue"
import https from "@/axios.js"

let sentence_list=ref()
let audio_address=ref()
const options = reactive({
  isPlay: false //管理录音开关的按钮
})
onLoad(e=>{	
	https.post('/teacher/sentence_audio',{'essay_id':e.essay_id}).then(res=>{
		sentence_list.value = res.data.data
		audio_address.value =res.data.audio_address
		console.log(sentence_list.value);
	})
})
</script>

<style>
	page{
		background-color: #F5F5F5;
		height: 100%;
	}
	.box{
		background-color: #fff;
		height: 85%;
		overflow: auto;
	}
	.control {
	    display: flex;
	    justify-content: space-between;
		position:fixed; 
		bottom: 100rpx;
		left: 330rpx;
	}
</style>
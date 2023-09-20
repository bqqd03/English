<template>
	<view style="margin-top: 30rpx;justify-content: space-between;display: flex;">
		<button style="width: 165rpx;" type="primary" size="mini">添加作业</button>
		<button style="width: 165rpx;background-color: Orange;" type="primary" size="mini">分数汇总</button>
	</view>
	
	<view></view>
	
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import https from '../../axios.js'
import { reactive, ref } from "vue"
import common from "@/common/js/common.js"


onLoad(e=>{
	console.log(e);
})
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
</style>
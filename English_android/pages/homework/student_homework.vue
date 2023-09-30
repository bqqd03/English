<template>
	<view v-for="item in homeworkClass">
		<uni-card style="height: 320rpx;">
			<view style="display: flex;flex-direction: column;float: left">
				<text style="font-size: 40rpx;font-weight: 600;margin-bottom: 10rpx;margin-left: -15rpx;color: black;">{{ item.homework_name }}</text>
				<view style="margin-left: 5rpx;display: flex;flex-direction: column">
					<text>{{ '文章名称：' + item.essay_name }}</text>
					<text>{{ '文章难度：' + item.grade }}</text>
					<text>{{ '练习形式：' + item.homework_type }}</text>
					<text>{{ '开始时间：'+item.start_date }}</text>
					<text>{{ '截止时间：'+item.end_date }}</text>
				</view>
				
			</view>
			<view style="float: right;display: flex;flex-direction: column;text-align: center;margin-top: 10rpx;">
				<view style="font-size: 32rpx;">
					<text v-if="item.status!=='已完成'">{{ item.status }}</text>
					<div v-if="item.status==='已完成'">
						<text>总分：</text>
						<text v-if="item.score<60" style="color: crimson;font-size: 52rpx">{{ item.score }}</text>
						<text v-else style="color: ForestGreen;font-size: 52rpx">{{ item.score }}</text>
						<text> 分</text>
					</div>
				</view>
				<view style="margin-top: 160rpx;">
					<button size="mini" type="primary" v-if="item.status==='进行中'" @click="begin(item)" >开始练习</button>
					<button size="mini" type="primary" v-if="item.status==='已完成'" @click="detail(item)">查看详情</button>
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
	class_id.value = e.class_id
	https.post('/student/homework_list',{'class_id':e.class_id,'user_id':e.user_id}).then(res=>{
		homeworkClass.value=res.data
	}).catch(()=>{
		ElMessage.error('未连接到服务器')
	})
})

function begin(item) {
  if (item.homework_type==='选择'){
	  uni.navigateTo({
	  	url: '/pages/homework/ninegrid?homework_id='+item.homework_id
	  })
  } else if (item.homework_type==='填空'){
   uni.navigateTo({
   	url: '/pages/homework/blank?homework_id='+item.homework_id
   })
  }

}
function detail(item) {
  uni.navigateTo({
  	url: '/pages/homework/detail?homework_id='+item.homework_id
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
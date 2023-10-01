<template>
	<view style="height: 80rpx;background-color: Silver;display: flex;justify-content: center;align-items: center;">
		<view style="font-size: 40rpx;">
			<text style="color: forestgreen">{{ submit_num }}</text>
			<text>人已交</text>
		</view>
		<view style="margin-left: 30rpx;font-size: 40rpx;">
			<text style="color: crimson">{{ noSubmit_num }}</text>
			<text>人未交</text>
		</view>
	</view>
	<view  v-for="item in result">
		<uni-card>
			<view style="display: flex;flex-direction: row;">
				<image :src="common.fronturl +item.avatar" style="width: 40px;height: 40px;border-radius: 40rpx;"/>
				<view style="margin-left: 3%;display: flex;flex-direction: column;color: black;">
					<text style="font-size: 40rpx;"> {{ item.username }}</text>
					<text style="font-size: 25rpx;"> {{ '邮箱：' + item.email }}</text>
				</view>
			</view>
			<view v-if="item.type==='1'" style="margin-top: 20rpx;color: black;">
				<view>
					<text>{{ '提交时间：'+item.current_time.slice(0,16) }}</text>
				</view>
				<view>
					<text>{{ '练习成绩：' }}</text>
					<text v-if="item.score<60" style="color: crimson">{{ item.score }}</text>
					<text v-else style="color: ForestGreen">{{ item.score }}</text>
					<text> 分</text>
				</view>
				<view>
					<text>{{ '练习用时：' + item.time }}</text>
				</view>
				
				<view style="float: right;margin-top: -60rpx;margin-bottom: 10rpx;">
					<button size="mini" type="primary" @click="detail(item)">查看详情</button>
				</view>
			</view>
			<view style="margin-top: 15rpx;color: crimson;margin-bottom: 5rpx;font-size: 35rpx;" v-else>
				<text>未提交</text>
			</view>
		</uni-card>
	</view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import https from '../../axios.js'
import { reactive, ref } from "vue"
import common from "@/common/js/common.js"

let result = ref()
let class_id = ref()
let submit_num = ref(0)
let noSubmit_num = ref(0)

onLoad(e=>{
	https.post('/teacher/students_homework',{'homework_id':e.homework_id}).then(res=>{
	    timeChange(res.data.data)
	    result.value = res.data.data
	    class_id.value=res.data.class_id
	    res.data.data.forEach(item=>{
	      if (item.type==='0'){
	        noSubmit_num.value+=1
	      } else {
	        submit_num.value+=1
	      }
	    })
	  }).catch(()=>{
		uni.showToast({
			title: 未连接到服务器,
			icon:'error',
			duration: 3000,
		})
	  })
})
function timeChange(data) {
  for (let i=0;i<data.length;i++){
    if (data[i].type==='1'){
      const temp = data[i].time
      const minutes = Math.floor(temp / 60)
      const seconds = temp % 60
      data[i].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    }

  }
}
function detail(item) {
  uni.navigateTo({
  	url: '/pages/homework/detail?homework_id='+item.homework_id + '&user_id=' + item.stu_id
  })
}
</script>

<style>
	page{
		background-color: #F5F5F5;
		height: 100%;
	}
</style>
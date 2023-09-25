<template>
	<view style="height: 200rpx;background-color: DarkGray;">
		<view class="container">
			<image :src="avatar" class="avatar"/>
			<text style="color: #fff;"> {{ teacher_name + '老师' }} </text>
		</view>
		<view class="className">
			<text style="font-size: 38rpx;margin-bottom: 10rpx;"> {{ class_name}} </text>
			<text style="background-color: #fff;color: cornflowerblue;width: 100rpx;">{{  '共 ' + stu_num + ' 人'  }}</text>
			<text> {{ class_code }} </text>
		</view>
		<button style="width: 22%;position: absolute;top: 8%;right: 5%;" type="primary" size="mini" @click="getExercise()" v-if="role === 'teacher'">作业管理</button>
		<button style="width: 22%;position: absolute;top: 8%;right: 5%;" type="primary" size="mini" @click="getHomework()" v-if="role === 'student'">我的作业</button>
	</view>
	<view v-for="item in classStu" style="margin-top: 3%;margin-left: 3%;display: flex;flex-direction: row;border-bottom: 1px solid black;padding-bottom: 3%;">
		<image :src="common.fronturl +item.avatar" style="width: 40px;height: 40px;border-radius: 40rpx;"/>
		<view style="margin-left: 3%;display: flex;flex-direction: column;">
			<text> {{ item.username }}</text>
			<text style="font-size: 10rpx;"> {{ '邮箱：' + item.email }}</text>
		</view>
	</view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import https from '../../axios.js'
import { reactive, ref } from "vue"
import common from "@/common/js/common.js"

let class_id = ref()
let teacher_name = ref()
let class_name = ref()
let class_code = ref()
let stu_num = ref()
let avatar = ref()
let classStu = ref()
let role = JSON.parse(uni.getStorageSync('token')).role
onLoad(e=>{
	https.post('/teacher/class_info',{'class_id': e.class_id}).then(res=>{
		class_id.value = res.data.class_id
		teacher_name.value=res.data.teacher_name
		class_name.value=res.data.class_name
		class_code.value=res.data.class_code
		stu_num.value=res.data.stu_num
		https.post('/auth/get_teacher_info',{'username':res.data.teacher_name}).then(res=>{
		avatar.value = common.fronturl + res.data.avatar
		})
		https.post('/teacher/class_student',{'class_id':e.class_id}).then(res=>{
		  classStu.value=res.data.data
		})
	}).catch(()=>{
	  ElMessage.error('未连接到服务器')
	})
})
function getExercise(){
	uni.navigateTo({
		url: '/pages/class_control/class_homework?class_id='+ class_id.value +'&teacher_name=' + teacher_name.value
	})
}
function getHomework(){
	uni.navigateTo({
		url: '/pages/class_control/student_homework?class_id='+ class_id.value +'&user_id=' + JSON.parse(uni.getStorageSync('token')).user_id
	})
}

</script>

<style>
	page{
		background-color: #F5F5F5;
		height: 100%;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 24rpx;
		padding-top: 18rpx;
		width: 30%;
	}
	.avatar{
		width: 60px;
		height: 60px;
		border-radius: 60rpx;
	}
	.className{
		position: absolute;
		left: 38%;
		top: 2%;
		color: #fff;
		display: flex;
		flex-direction: column;
	}
</style>
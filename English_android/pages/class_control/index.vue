<template>
	<view style="margin-top: 20rpx;" v-for="item in classInfo" class="item_tow"  @click="classDetails(item)">
		<text>{{ item.class_name }}</text>
		<uni-icons type="forward" />
	</view>
</template>



<script setup>
import { reactive, ref } from "vue"
import https from '../../axios.js'
import { onShow } from "@dcloudio/uni-app"

let classInfo=ref()
let token = JSON.parse(uni.getStorageSync('token'))

onShow(()=>{
  getClass()
})

function getClass() {
	if (token.role == 'teacher'){
		https.post('/teacher/class_list',{'username': token.username}).then(res=>{
		  classInfo.value=res.data
		  console.log(classInfo.value);
		}).catch(()=>{
		  ElMessage.error('未连接到服务器')
		})
	}
}
function classDetails(item) {
 uni.navigateTo({
 	url: '/pages/class_control/class_details?class_id='+ item.class_id
 })
}

</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.item_tow{
		display: flex;
		flex-direction: row;
		align-items: center;
		background-color: #fff;
		padding: 0 30rpx;
		height: 120rpx;
		border-bottom: 1px #eaeaea solid;
	}
	.item_tow .uni-icons{
		position:fixed;
		right: 40rpx;
	}
</style>
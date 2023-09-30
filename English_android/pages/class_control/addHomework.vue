<template>
	<view style="display: flex;justify-content: center;align-items: center;height: 100%;">
		<uni-card style="height: 82%;">
			<uni-forms style="margin-top: 20rpx;" :model="addForm" labelWidth="80">
				<uni-forms-item label="作业名称">
					<uni-easyinput v-model="addForm.homework_name" placeholder="请输入作业名称" />
				</uni-forms-item>
				<uni-forms-item label="所需文章">
					<uni-data-select v-model="addForm.essay_id" :localdata="essayList" placeholder="请选择练习文章" />
				</uni-forms-item>
				<uni-forms-item label="文章难度">
					<uni-data-select v-model="addForm.grade" :localdata="gradeList" placeholder="请选择练习文章难度" />
				</uni-forms-item>
				<uni-forms-item label="练习形式">
					<uni-data-select v-model="addForm.homework_type" :localdata="typeList" placeholder="请选择练习文章难度" />
				</uni-forms-item>
				<uni-forms-item label="发布时间">
					<uni-datetime-picker type="datetime" :clear-icon="false" v-model="addForm.start_date" />
				</uni-forms-item>
				<uni-forms-item label="截止时间">
					<uni-datetime-picker type="datetime" :clear-icon="false" v-model="addForm.end_date" />
				</uni-forms-item>
			</uni-forms>
			<button @click="save()" type="primary">发布</button>
		</uni-card>
	</view>
	
	
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import { reactive, ref } from "vue"
import https from '@/axios.js'

let essayList=ref([])
const addForm = reactive({
  homework_name: '',
  class_id:'',
  essay_id:'',
  grade:'',
  homework_type:'',
  start_date:'',
  end_date:''
})
const gradeList=[
  {'text':'简单', 'value':'简单'},
  {'text':'中等', 'value':'中等'},
  {'text':'困难', 'value':'困难'}
]
const typeList=[
  {'text':'填空', 'value':'填空'},
  {'text':'选择', 'value':'选择'},
]
onLoad(e=>{
	const dateTime = new Date(+new Date()+8*3600*1000)
	addForm.class_id=e.class_id
	addForm.start_date = new Date(dateTime).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
	https.post('/teacher/essay_list',{'user_id':JSON.parse(uni.getStorageSync('token')).user_id}).then(res=>{
	    res.data.forEach(item=>{
	      essayList.value.push({
	        'text':item.title,
	        'value':item.essay_id
	      })
	    })
	  })
})
function save(){
	https.post('/teacher/add_homework',addForm).then(res=>{
	    if (res.data.code===200){
	      uni.showToast({
	      	title: '作业添加成功',
	      	position:'top',
	      	duration: 3000
	      })
		  uni.navigateBack()
	    } else {
	     uni.showToast({
	     	title: res.data.msg,
	     	duration: 3000,
			position:'top'
	     })
	    }
	  })
}
</script>

<style >
	page{
		background-color: #F5F5F5;
	}
</style>
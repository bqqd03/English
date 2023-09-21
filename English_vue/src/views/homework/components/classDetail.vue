<template>
  <span class="add-title">班级详情</span>
  <div style="display: flex; flex-direction: row;margin-left: 15%">
    <div style="margin-top: 6%;display: flex; flex-direction: column;align-items: center">
      <el-image :src="avatar" style="width: 100px;height: 100px;border-radius: 50%"/>
      <el-text style="font-size: 20px;margin-top: 8%"> {{ teacher_name + ' 老师' }} </el-text>

    </div>
    <div style="margin-top: 9%;margin-left: 10%">
      <el-text style="font-size: 30px;color: crimson"> {{ class_name }} </el-text>
    </div>
  </div>




</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import { ElMessage } from "element-plus"
import https from "@/apis/axio"

let avatar=ref()
let teacher_name=ref()
let class_name=ref()
// 子组件接收父组件传递过来的值
const props = defineProps({
  class_id: String,
})

onMounted(()=>{
  https.post('/student/class_detail',{'class_id':props.class_id}).then(res=>{
    avatar.value=res.data.teacher_avatar
    teacher_name.value=res.data.teacher_name
    class_name.value=res.data.class_name
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })

})

</script>

<style lang="scss" scoped>

.add-title{
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}

</style>
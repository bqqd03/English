<template>
  <div class="title">
    <span class="control_degree">申请人名单</span>
    <el-button style="margin-top: 18px" type="primary" @click="back()">返回</el-button>
  </div>

  <el-table :data="applicant" style="width: 100%;height: 100%" >
    <el-table-column align="center" label="头像" width="80">
      <template #default="scope">
        <el-avatar :src="scope.row.avatar"/>
      </template>
    </el-table-column>
    <el-table-column prop="user_id" label="学生ID" width="80" align="center" />
    <el-table-column prop="username" label="学生姓名" width="100"  />
    <el-table-column align="center" label="操作" width="80">
      <template #default="scope">
        <el-switch
            v-model="scope.row.confirm"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            active-value="1"
            inactive-value="0"
            @change="setConfirm(scope.row.user_id,scope.row.confirm)"/>
      </template>
    </el-table-column>

  </el-table>
</template>

<script setup>

import {onMounted, reactive,ref} from "vue";
import https from "@/apis/axio";
import {ElMessage} from "element-plus";

let applicant = ref()
const emit = defineEmits(['sendShow'])
const props = defineProps({
  class_id: String
})

onMounted(()=>{
  https.post('/teacher/applicant',{'class_id':props.class_id}).then(res=>{
    applicant.value = res.data
    console.log(applicant.value)
  })
})

function setConfirm(user_id,type) {
  https.post('/teacher/applicant_confirm',{'user_id':user_id,'type':type,'class_id':props.class_id}).then(res=>{
    if (res.data.code === 200){
      ElMessage.success('修改成功')
      back()
    }
  })
}

function back() {
  const option = reactive({
    controlShow:true,
    applicatShow:false
  })
  emit('sendShow',option)
}
</script>

<style scoped lang="scss">
.title{
  display: flex;
  justify-content: space-between;
}
.control_degree{
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}
</style>

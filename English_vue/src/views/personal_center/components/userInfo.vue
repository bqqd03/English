<template>
  <el-form class="infoForm" label-position="left">
    <el-form-item label="用户名" label-width="70px">
      <el-input v-model="editForm.username" placeholder="请重新输入用户名" />
    </el-form-item>

    <el-form-item label="邮箱" label-width="70px">
      <el-input v-model="editForm.email" placeholder="请重新输入邮箱" />
    </el-form-item>

    <el-form-item label="所教课程" label-width="70px" v-if="role==='teacher'">
        <el-text>{{ class_type }}</el-text>
    </el-form-item>

    <el-form-item label="所属班级" label-width="70px" v-if="role==='student'">
      <el-text>{{ class_type }}</el-text>
    </el-form-item>

    <el-form-item class="formFooter">
      <el-button @click="saveInfo()" type="primary">确 定</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import {ElMessage} from "element-plus"

let role = JSON.parse(localStorage.getItem('token')).role
const userInfo=ref()
const class_type=ref()
const editForm=reactive({
  user_id:'',
  username:'',
  email:'',
  role:''
})
onMounted(()=>{
  editForm.user_id = JSON.parse(localStorage.getItem('token')).user_id
  editForm.username = JSON.parse(localStorage.getItem('token')).username
  editForm.email = JSON.parse(localStorage.getItem('token')).email
  editForm.role = JSON.parse(localStorage.getItem('token')).role
  https.post('/auth/get_type',{'user_id':JSON.parse(localStorage.getItem('token')).user_id,'role':role}).then(res=>{
    class_type.value=res.data
  })
})

function saveInfo() {
  editForm.class_type = class_type.value.join(',')
  https.post('/auth/user_edit',editForm).then(res=>{
      if (res.data.code===200){
        ElMessage.success('修改成功')
        userInfo.value = JSON.parse(localStorage.getItem('token'))
        userInfo.value['username'] = editForm.username
        userInfo.value['email'] = editForm.email
        userInfo.value['class_type'] = editForm.class_type
        localStorage.setItem('token', JSON.stringify(userInfo.value));
      } else {
        ElMessage.error(res.data.message)
      }
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

</script>

<style lang="scss" scoped>
.infoForm{
    width: 30%;
}

</style>

<template>
  <el-form class="infoForm" :rules="rules" :model="editForm"  label-position="left" ref="ruleFormRef">
    <el-form-item label="旧密码" prop="oldPassword" label-width="80px">
      <el-input type="password" v-model="editForm.oldPassword" show-password/>
    </el-form-item>

    <el-form-item label="新密码" prop="newPassword" label-width="80px">
      <el-input type="password" v-model="editForm.newPassword" show-password/>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPassword" label-width="80px">
      <el-input type="password" v-model="editForm.checkPassword" show-password/>
    </el-form-item>

    <el-form-item class="formFooter">
      <el-button @click="saveInfo" type="primary" >确 定</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup>
import { reactive,ref } from "vue"
import https from "@/apis/axio"
import {ElMessage} from "element-plus"
import { useRouter } from 'vue-router'

const router = useRouter()
const password= localStorage.getItem('password')
const ruleFormRef= ref()
const editForm=reactive({
    oldPassword:'',
    newPassword:'',
    checkPassword:''
})

let oldRule = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入旧密码'));
    } else if (value !== password) {
        callback(new Error('输入的旧密码不正确!'));
    } else {
        callback();
    }
}
let checkRule = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== editForm.newPassword) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
}
let newRule = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入新密码'));
    } else if (value === editForm.oldPassword) {
        callback(new Error('新旧密码一样'));
    } else {
        callback();
    }
}

const rules = {
    oldPassword: [{ required: true, validator: oldRule, trigger: 'blur' }],
    newPassword: [
        { required: true, validator: newRule, trigger: "blur" },
        { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
    ],
    checkPassword: [{ required: true, validator: checkRule, trigger: 'blur' }],
}

function saveInfo() {
    ruleFormRef.value.validate(valid => {
        if (valid) {
            https.post('/auth/change_password',{'user_id':JSON.parse(localStorage.getItem('token')).user_id,'password':editForm.newPassword}).then(res=>{
                if (res.data.code===200){
                    ElMessage.success('修改成功')
                    window.localStorage.removeItem('password')
                    window.localStorage.removeItem('remember')
                    router.push('/login')
                }
            })
        } else {
            // The form is invalid, stop the submission.
            return false;
        }
    })

}

</script>

<style lang="scss" scoped>
.infoForm{
    width: 30%;
}

</style>
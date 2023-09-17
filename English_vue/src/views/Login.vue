<template>
  <el-card header="用户登录" class="login_box">
    <el-form
        status-icon
        :model="loginForm"
        :rules="rules"
        label-width="80px"
        size="small">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" autofocus />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button native-type="reset">重置</el-button>
        <el-button @click="register()" style="position: absolute;right: 0">注册</el-button>
      </el-form-item>
      <el-form-item >
        <input type="checkbox" @click="remember" v-model="rememberMe" />记住密码
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import {  reactive, onMounted, ref } from "vue"
import https from "@/apis/axio"
import { useRouter } from 'vue-router'
import { ElMessage } from "element-plus"


const router = useRouter()

const rememberMe=ref(false)

const loginForm = reactive({
    username: '',
    password: '',
});


const rules = {
    username: [
        { required: true, message: "用户名缺失", trigger: "blur" },
        { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" },
    ],
    password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
    ],
};

onMounted(()=>{
    rememberMe.value = window.localStorage.getItem('remember')
    let password = window.localStorage.getItem('password')
    let token = window.localStorage.getItem('token')
    if(token){
        token = JSON.parse(token)
        loginForm.username = token.username
        if(rememberMe.value==='true'){
            rememberMe.value=true
            loginForm.password = password
        }
    }


})

function submitForm(){
    https.post('/auth/login', loginForm).then(res=>{
        if (res.data.code === 200){
            window.localStorage.setItem('token',JSON.stringify(res.data.user))
            window.localStorage.setItem('password',loginForm.password)
            ElMessage.success('登录成功')
            window.localStorage.setItem('path','/home')
            router.push('/home')
        } else {
            ElMessage.error(res.data.message)
        }

    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}

function register(){
    router.push('/register')
}
function remember() {
    rememberMe.value = !rememberMe.value
    localStorage.setItem('remember',rememberMe.value)
}
</script>


<style scss>
.login_box{
    width: 400px;
    padding: 0 20px;
    position: absolute;
    left: 50%;
    top:30%;
    transform: translate(-50%,-50%);
}

#remember-me * {
    line-height: 10px;
    margin-top: 0;
    margin-bottom: 0;
}
</style>
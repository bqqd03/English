<template>
  <div >
    <span class="lef_box">英语训练系统</span>
  </div>

  <el-dropdown style="float: right;">
    <el-space class="right_box" :size="15">
      <el-avatar :src="token.avatar"/>
      <span>欢迎，{{token.username}} {{token.role}}</span>
    </el-space>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout()">
          <IconPark type="logout" size="15" fill="#333" style="margin-right: 5px"/>
          <span>退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {IconPark} from "@icon-park/vue-next/es/all";

const router = useRouter()
const token = JSON.parse(localStorage.getItem('token'))
if (token.role === 'admin'){
    token.role='管理员'
} else if (token.role === 'teacher'){
    token.role='老师'
} else {
    token.role='同学'
}


function logout(){
    router.push('/login')
}
</script>

<style  lang="scss"  scoped>

.lef_box{
    float: left;
    padding: 10px 0 10px 50px;
    font-size:28px
}
.right_box{
    padding: 10px;
    color: #FFA500;
    font-size: 18px;
}
</style>

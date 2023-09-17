<template>
  <el-menu
      router
      :default-active="activeIndex"
      :collapse="left_menu"
      text-color="#F8F8FF"
      background-color="#00FA9A">
    <IconPark type="indent-left" size="23" fill="#ffffff" @click="left_menu=!left_menu" style="padding: 18px 0 10px 20px"/>
    <el-menu-item
        v-for="item in menuData[role]"
        :index="item.path"
        :route="item.path"
        @click="saveNavState(item.path)">
      <el-icon>
        <component :is="item.icon" />
      </el-icon>
      <span>{{item.label}}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {ref, reactive} from 'vue'
import { IconPark } from "@icon-park/vue-next/es/all"

let activeIndex = localStorage.getItem('path')
const left_menu = ref(false)
const role = JSON.parse(localStorage.getItem('token')).role
const menuData = reactive({
  // 教师端循环项
  teacher: [
    {
      path: "/home",
      label: "首页",
      icon: "House",
    },{
      path: "/exercise",
      label: "英语练习",
      icon: "Document",
    },{
      path: "/exercise_result",
      label: "练习结果",
      icon: "Collection",
    },{
      path: "/essay_control",
      label: "文章管理",
      icon: "SetUp",
    },{
      path: "/class_control",
      label: "班级管理",
      icon: "SetUp",
    },{
      path: "/personal",
      name: "personal",
      label: "个人中心",
      icon: "User",
    }
  ],
  // 学生端循环项
  student: [
    {
      path: "/home",
      label: "首页",
      icon: 'House',
    },{
      path: "/exercise",
      label: "英语练习",
      icon: "Document",
    },{
      path: "/student_class",
      label: "我的班级",
      icon: "Document",
    },{
      path: "/exercise_result",
      label: "练习结果",
      icon: "Collection",
    },{
      path: "/personal",
      name: "personal",
      label: "个人中心",
      icon: "User",
    }
  ],
  // 管理员菜单
  admin: [
    {
      path: "/home",
      name: "homepage",
      label: "首页",
      icon: "House"
    },{
      path: "/user_manage",
      name: "user_manage",
      label: "用户管理",
      icon: "Operation",
    },{
      path: "/personal",
      name: "personal",
      label: "个人中心",
      icon: "User",
    }
  ],

})

function saveNavState(path){
  window.localStorage.setItem('path',path)
  activeIndex = localStorage.getItem('path')
}
</script>

<style lang="scss" scoped>
.el-menu-item.is-active {
  background-color: #87CEEB;
  color: #F8F8FF;
}

</style>

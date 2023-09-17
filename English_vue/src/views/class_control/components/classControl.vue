<template>
  <span class="add-title">班级管理</span>
  <el-button type="primary" style="margin-top: 15px;margin-left: 10px" @click="getList()">申请人名单</el-button>
</template>

<script setup>
import {reactive, ref} from "vue";

let emit = defineEmits(["handLer"]);


function getList() {
  const option = reactive({
    controlShow:false,
    applicatShow:true
  })
  emit("handLer", option);
}

</script>

<style scoped lang="scss">
  .add-title{
    display: block;
    font-size: 22px;
    font-weight: bold;
    padding-left: 10px;
    padding-top: 15px;
  }
</style>

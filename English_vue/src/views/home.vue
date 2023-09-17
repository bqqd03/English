<template>
  <el-card class="current_data">
    <el-carousel height="190px" style="width: 80%" direction="vertical" interval="5000">
      <el-carousel-item v-for="item in file_path" >
        <el-image :src="item" style="width: 100%;height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>


    <div style="position: relative;left: 90%;bottom: 190px">
      <div class="week"><el-space>{{ week }}</el-space></div>
      <div class="day"><el-space>{{ day }}</el-space></div>
      <div class="month"><el-space>{{ month }}</el-space></div>
    </div>
  </el-card>
</template>

<script setup>
import {onMounted} from "vue";

const months = [
  "一月", "二月", "三月", "四月", "五月", "六月",
  "七月", "八月", "九月", "十月", "十一月", "十二月"
]
const time = new Date();
const month = months[time.getMonth()]
const day = time.getDate()
const week = '星期' + '日一二三四五六'.charAt(time.getDay());
const file_path=['/assets/images/home_01.png','/assets/images/home_02.png','/assets/images/home_03.png','/assets/images/home_04.png']

onMounted(()=>{


})

</script>

<style scoped lang="scss">
.current_data{
  position: relative;
  top: 3%;
  height: 28%;
}
.week{
  font-size: 25px;
  color: crimson;
  margin-top: 5px;
}
.day{
  font-size: 65px;
  margin-top: 5px;
}
.month{
  font-size: 25px;
  color: #4682B4;
  margin-top: 5px;
  margin-left: 15px;
}
</style>
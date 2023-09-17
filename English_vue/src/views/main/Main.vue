<template>
  <el-container>
    <el-aside>
      <left-menu style="background-color: #4682B4"/>
    </el-aside>

    <el-container>
      <el-header>
        <site-header />
      </el-header>
      <el-main style="overflow: hidden">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SiteHeader from './SiteHeader.vue'
import LeftMenu from './LeftMenu.vue'

</script>

<style lang="scss" scoped>
.el-header {
    text-align: left;
}
.el-container {
    height: 100vh;
}
.el-aside {
    width: auto;
    background-color: #4682B4;
}
.el-main{
    background-color: #F5F5F5 ;
}

</style>

<template>
  <span class="add-title">英语练习排名</span>
  <el-table :data="ranking_data" style="width: 100%;height: 100%;margin-top: 20px" empty-text="没人进行练习">
    <el-table-column type="index"  label="名次" width="80%" align="center" />
    <el-table-column prop="user_name" label="用户姓名" width="100%" align="center" />
    <el-table-column prop="essay_num" label="练习篇数" width="80%" align="center" />
    <el-table-column label="分数" width="80%" align="center">
      <template #default="scope">
        <span v-if="scope.row.score<60" style="color: crimson">{{ scope.row.score }}</span>
        <span v-else style="color: ForestGreen">{{ scope.row.score }}</span>
        <span> 分</span>
      </template>
    </el-table-column>
  </el-table>

</template>

<script setup>
import { onMounted,ref } from "vue"
import https from "@/apis/axio"

const ranking_data=ref()

onMounted(()=>{
  https.get('/auth/get_ranking').then(res=>{
    ranking_data.value=res.data
  })
})


</script>

<style lang="scss" scoped>

.add-title {
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}
</style>
<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>练习结果</span>
        </template>

        <el-table :data="result" style="width: 100%;height: 100%" tooltip-effect="dark" >
          <el-table-column type="index"  label="#" width="50" />
          <el-table-column prop="essay_title" label="文章标题" width="300" show-overflow-tooltip />
          <el-table-column prop="time" label="练习用时" width="120" align="center"  />
          <el-table-column label="练习成绩" width="120" align="center">
            <template #default="scope">
              <span v-if="scope.row.score<60" style="color: crimson">{{ scope.row.score }}</span>
              <span v-else style="color: ForestGreen">{{ scope.row.score }}</span>
              <span> 分</span>
            </template>
          </el-table-column>
          <el-table-column prop="current_time" label="练习时间" align="center" />
          <el-table-column align="center" label="详细情况">
            <template #default="scope">
              <el-button @click="resultDetail(scope.row)">详细情况</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <ranking/>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue"
import https from "@/apis/axio"
import { useRouter } from 'vue-router'
import {ElMessage} from "element-plus";
import Ranking from "@/views/exercise_result/components/ranking.vue";


const router = useRouter()
let result = ref()
let user_id= JSON.parse(localStorage.getItem('token')).user_id

onMounted(()=>{
    https.post('/english/exercise_result',{'user_id':user_id}).then(res=>{
      timeChange(res.data)
      result.value = res.data
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
})

function timeChange(data) {
    for (let i=0;i<data.length;i++){
        const temp = data[i].time
        const minutes = Math.floor(temp / 60)
        const seconds = temp % 60
        data[i].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    }
}
function resultDetail(row) {
    router.push({
        name: 'exercise_detail',
        query:{
            essay_id:row.essay_id,
            exercise_num:row.exercise_num,
            grade:row.grade
        }
    })
}
</script>

<style lang="scss" scoped>
.el-row {
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
}
.el-card{
  height: 100%;
}
:deep(.el-card__header) {
  background-color: #E6E6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
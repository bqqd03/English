<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>布置作业</span>
          <el-button @click="back" type="primary">返回</el-button>
        </template>
        <el-scrollbar :style="{ height: scrollHeight }">
          <el-table :data="homeworkClass" style="width: 100%;height: 100%" tooltip-effect="dark" >
            <el-table-column prop="homework_id" label="作业ID" width="80" />
            <el-table-column prop="homework_name" label="作业名称" width="120"  />
            <el-table-column prop="essay_name" label="文章名称" width="150" show-overflow-tooltip />
            <el-table-column prop="grade" label="文章难度" width="100" />
            <el-table-column prop="homework_type" label="练习形式" width="100"  />
            <el-table-column prop="start_date" label="开始时间" width="165">
              <template #default="scope">
                <text>{{ scope.row.start_date.slice(0,16) }}</text>
              </template>
            </el-table-column>
            <el-table-column prop="end_date" label="结束时间" width="165">
              <template #default="scope">
                <text>{{ scope.row.end_date.slice(0,16) }}</text>
              </template>
            </el-table-column>
            <el-table-column align="center" label="学生答题情况">
              <template #default="scope">
                <el-button link style="color: #409eff" @click="getStudent(scope.row.homework_id)">详情</el-button>
              </template>
            </el-table-column>

          </el-table>
        </el-scrollbar>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <add-homework :classID="route.query.class_id" @getExercise="getExercise" />
      </el-card>
    </el-col>
  </el-row>

</template>

<script setup>
import {onMounted, ref} from "vue";
import https from "@/apis/axio";
import {ElMessage} from "element-plus";
import {useRoute,useRouter} from "vue-router";
import AddHomework from "../components/addHomework.vue"

let homeworkClass=ref()
const route = useRoute()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const router=useRouter()


onMounted(()=>{
  getExercise()
})

function getExercise() {
  https.post('/teacher/class_homework',{'class_id':route.query.class_id}).then(res=>{
    homeworkClass.value=res.data
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function getStudent(homework_id) {
  router.push({
    name: 'students_homework',
    query:{
      homework_id:homework_id
    }
  })
}

function back() {
  router.push('/class_control')
}

</script>


<style scoped lang="scss">
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

<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>训练结果</span>
          <el-button @click="back" type="primary">返回</el-button>
        </template>

        <el-table :data="result" style="width: 100%;height: 100%" >
          <el-table-column type="index"  label="#" width="50%" />
          <el-table-column align="center" label="头像" width="100">
            <template #default="scope">
              <el-avatar :src="scope.row.avatar"/>
            </template>
          </el-table-column>
          <el-table-column prop="username" label="学生姓名" width="120%"  />
          <el-table-column prop="email" label="学生邮箱" width="180"   />
          <el-table-column prop="time" label="练习用时" width="120%" align="center" />
          <el-table-column label="练习成绩" width="120" align="center">
            <template #default="scope">
              <div  v-if="scope.row.type==='1'">
                <span v-if="scope.row.score<60" style="color: crimson">{{ scope.row.score }}</span>
                <span v-else style="color: ForestGreen">{{ scope.row.score }}</span>
                <span> 分</span>
              </div>

            </template>
          </el-table-column>
          <el-table-column prop="current_time" label="练习时间" width="180"/>
          <el-table-column align="center" label="详细情况">
            <template #default="scope">
              <el-button @click="resultDetail(scope.row)" v-if="scope.row.type==='1'">详细情况</el-button>
              <span style="color: crimson" v-else >未提交</span>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>

        <span class="add-title">提交情况</span>
        <el-form class="addForm">
          <el-form-item label="已交人数">
              <el-space style="color: ForestGreen;font-size: 18px">{{submit_num + '人' }}</el-space>
          </el-form-item>
          <el-form-item label="未交人数">
              <el-space style="color: crimson;font-size: 18px">{{noSubmit_num + '人' }}</el-space>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue"
import https from "@/apis/axio"
import { useRoute,useRouter } from 'vue-router'
import {ElMessage} from "element-plus";


const route = useRoute()
const router = useRouter()
let result = ref()
let class_id = ref()
let submit_num = ref(0)
let noSubmit_num = ref(0)
let user_id= JSON.parse(localStorage.getItem('token')).user_id

onMounted(()=>{
  https.post('/teacher/students_homework',{'homework_id':route.query.homework_id}).then(res=>{
    timeChange(res.data.data)
    result.value = res.data.data
    class_id.value=res.data.class_id
    res.data.data.forEach(item=>{
      if (item.type==='0'){
        noSubmit_num.value+=1
      } else {
        submit_num.value+=1
      }
    })
    console.log(result)
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
})

function timeChange(data) {
  for (let i=0;i<data.length;i++){
    if (data[i].type==='1'){
      const temp = data[i].time
      const minutes = Math.floor(temp / 60)
      const seconds = temp % 60
      data[i].time = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    }

  }
}
function resultDetail(row) {
  router.push({
    name: 'homework_detail',
    query:{
      homework_id:row.homework_id,
      user_id:row.stu_id,
      type:'1'
    }
  })
}

function back() {
  router.push({
    name: 'class_homework',
    query:{
      class_id:class_id.value
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
.add-title{
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}
.addForm{
  margin-top: 20px;
  margin-left: 10px;
}
.el-form-item{
  font-weight: bold;
  font-size: 5px;
}
</style>

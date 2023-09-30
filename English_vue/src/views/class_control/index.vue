<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>班级管理</span>
        </template>
        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="item in classInfo" class="classCard">
            <el-card  style="margin-bottom:20px;height: 50%;width: 50%">
              <div class="class_head">
                <span>班级信息</span>
                <el-button link @click="detailStu(item.class_id)">班级管理</el-button>
              </div>
              <div style=" display: flex;justify-content: space-between;">
                <el-form>
                  <el-form-item label="班级编号:" label-width="80px">
                    <span>{{item.class_code}}</span>
                  </el-form-item>
                  <el-form-item label="班级名称:" label-width="80px">
                    <span>{{item.class_name}}</span>
                  </el-form-item>
                  <el-form-item label="学生数量:" label-width="80px">
                    <span>{{item.stu_num + ' 名'}}</span>
                  </el-form-item>
                </el-form>
                <el-button style="margin-top: 100px" type="primary" @click="getExercise(item.class_id)">布置作业</el-button>
              </div>

            </el-card>
          </div>
        </el-scrollbar>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <add-class @getClassList="getClassList" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { onMounted, ref } from "vue";
import https from "@/apis/axio";
import { ElMessage } from "element-plus";
import {useRouter} from "vue-router";


let username= JSON.parse(localStorage.getItem('token')).username
let classInfo=ref()
const router = useRouter()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
import AddClass from "@/views/class_control/components/addClass.vue";

onMounted(()=>{
  getClassList()
})

function getClassList() {
  https.post('/teacher/class_list',{'username':username}).then(res=>{
    classInfo.value=res.data
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function detailStu(class_id) {
  router.push({
    name: 'class_student',
    query:{
      class_id:class_id,
    }
  })

}
function getExercise(class_id) {
  router.push({
    name: 'class_homework',
    query:{
      class_id:class_id
    }
  })

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
.title_input{
  width: auto;
  border: 5px;
  font-size: 14px;
  padding: 5px;
}
.classCard{
  margin-left: 50px;
  margin-top: 30px;
  overflow: auto
}
.el-form-item{
  margin-bottom: 1px;
}
.class_head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid  black;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
</style>

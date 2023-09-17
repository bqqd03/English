<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>班级学生</span>
          <el-button @click="router.push('class_control')" type="primary">返回</el-button>
        </template>
        <el-scrollbar :style="{ height: scrollHeight }">
          <el-table :data="classStu" style="width: 100%;height: 100%" >
            <el-table-column type="index"  label="#" width="50" />
            <el-table-column align="center" label="头像" width="130">
              <template #default="scope">
                <el-avatar :src="scope.row.avatar"/>
              </template>
            </el-table-column>
            <el-table-column prop="user_id" label="学生ID" width="150" />
            <el-table-column prop="username" label="学生姓名" width="150"  />
            <el-table-column prop="email" label="邮件" width="200"   />
            <el-table-column prop="class_type" label="所属班级" width="150">
              <template #default="scope">
               <el-space>{{ className }}</el-space>
              </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
              <template #default="scope">
                <el-button type="danger" @click="getOut(scope.row)">踢出</el-button>
              </template>
            </el-table-column>

          </el-table>
        </el-scrollbar>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <class-control v-if="controlShow" @handLer="hand" ></class-control>
        <class-applicat v-if="applicatShow" @sendShow="applyShow" :class_id="route.query.class_id"></class-applicat>
      </el-card>
    </el-col>
  </el-row>

</template>

<script setup>
import {onMounted, ref} from "vue";
import https from "@/apis/axio";
import {ElMessage} from "element-plus";
import {useRoute,useRouter} from "vue-router";
import ClassApplicat from "../components/classApplicat.vue";
import ClassControl from "../components/classControl.vue";

let classStu=ref()
let className=ref()
const route = useRoute()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const router=useRouter()
const controlShow = ref(true)
const applicatShow = ref(false)



onMounted(()=>{
  getClassStu()
})

function getClassStu() {
  https.post('/teacher/class_student',{'class_id':route.query.class_id}).then(res=>{
    classStu.value=res.data.data
    className.value=res.data.class_name
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function getOut(item) {
  https.post('/teacher/delete_student',{'class_id':route.query.class_id,'stu_id':item.user_id}).then(res=>{
    if (res.data.code===200){
      ElMessage.success('删除成功')
      getClassStu()
    }
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}
function hand(v) {
  controlShow.value = v.controlShow
  applicatShow.value =v.applicatShow
}
function applyShow(v) {
  controlShow.value = v.controlShow
  applicatShow.value =v.applicatShow
  getClassStu()
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
.add-title{
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}
</style>

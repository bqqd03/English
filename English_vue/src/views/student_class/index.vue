<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>班级信息</span>
        </template>

        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="item in classInfo">
            <el-card @click="classDetail(item)">
              <span>{{ item.class_name }}</span>
              <ArrowRightBold style="width: 1em; height: 1em;padding-top: 4px;float: right;" />
            </el-card>
          </div>
        </el-scrollbar>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <span class="add-title">加入班级</span>
        <el-form class="addForm">
          <el-form-item label="班级码">
            <el-input v-model="class_code" placeholder="请输入班级码"/>
          </el-form-item>

          <el-form-item class="formFooter">
            <el-button @click="save()" type="primary">申 请</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import { ElMessage } from "element-plus"
import {ArrowRightBold} from "@element-plus/icons-vue";

const router = useRouter()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const classInfo = ref()
const class_code = ref()


onMounted(()=>{
  getClass()
})

function getClass() {
  https.post('/student/get_class',{'user_id':JSON.parse(localStorage.getItem('token')).user_id}).then(res=>{
    classInfo.value = res.data
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function save() {
  https.post('/student/apply_class',{'classCode':class_code.value,user_id:JSON.parse(localStorage.getItem('token')).user_id}).then(res=>{
    if (res.data.code===200){
      ElMessage.success('申请成功')
    } else {
      ElMessage.error(res.data.message)
    }
  })
}
function classDetail(item) {
  router.push({
    name: 'homework',
    query:{
      class_id:item.class_id
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

.formFooter{
  float: right;
}
</style>

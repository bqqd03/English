<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>作业练习</span>
          <el-button @click="back" type="primary" :icon="Back">返回</el-button>
        </template>
        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="item in homeworkInfo" class="classCard">
            <el-card  style="margin-bottom:20px;width: 450px">
              <div class="class_head">
                <el-space>作业信息</el-space>
                <el-space v-if="item.status!=='已完成'">{{ item.status }}</el-space>
                <div v-if="item.status==='已完成'">
                  <span>总分：</span>
                  <span v-if="item.score<60" style="color: crimson;font-size: 30px">{{ item.score }}</span>
                  <span v-else style="color: ForestGreen;font-size: 30px">{{ item.score }}</span>
                  <span> 分</span>
                </div>
              </div>

              <el-form label-position="left">
                <el-form-item label="作业ID:" label-width="80px">
                  <span>{{item.homework_id}}</span>
                </el-form-item>
                <el-form-item label="作业名称:" label-width="80px">
                  <span>{{item.homework_name}}</span>
                </el-form-item>
                <el-form-item label="所属班级:" label-width="80px">
                  <span>{{item.class_name}}</span>
                </el-form-item>
                <el-form-item label="文章名称:" label-width="80px">
                  <el-tooltip
                      effect="dark"
                      :content=item.essay_name
                      placement="top-start">
                    <span style="width: 50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;">{{item.essay_name}}</span>
                  </el-tooltip>
                </el-form-item>
                <el-form-item label="文章难度:" label-width="80px">
                  <span>{{item.grade}}</span>
                </el-form-item>
                <el-form-item label="练习形式:" label-width="80px">
                  <span>{{item.homework_type}}</span>
                </el-form-item>
              </el-form>
              <el-button style="margin-left: 320px" type="primary" v-if="item.status==='进行中'" @click="begin(item)">开始练习</el-button>
              <el-button style="margin-left: 320px" type="primary" v-if="item.status==='已完成'" @click="detail(item)">查看详情</el-button>

            </el-card>
          </div>
        </el-scrollbar>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <class-detail :class_id="route.query.class_id" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import {onMounted, ref} from "vue";
import https from "@/apis/axio";
import {ElMessage} from "element-plus";
import {useRouter,useRoute} from "vue-router";
import {Back} from "@element-plus/icons-vue";
import ClassDetail from "./components/classDetail.vue";

let homeworkInfo=ref([])
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const router = useRouter()
const route = useRoute()

onMounted(()=>{
  https.post('/student/homework_list',{'class_id':route.query.class_id,'user_id':JSON.parse(localStorage.getItem('token')).user_id}).then(res=>{
    homeworkInfo.value=res.data
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })

})
function begin(item) {
  if (item.homework_type==='选择'){
    router.push({
      name: 'homework_ninGrid',
      query:{
        homework_id:item.homework_id
      }
    })
  } else if (item.homework_type==='填空'){
    router.push({
      name: 'homework_blank',
      query:{
        homework_id:item.homework_id
      }
    })
  }

}
function detail(item) {
  router.push({
    name: 'homework_detail',
    query:{
      homework_id:item.homework_id,
      user_id:JSON.parse(localStorage.getItem('token')).user_id,
      type:'2'
    }
  })
}
function back() {
  router.push('/student_class')
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
.classCard{
  margin-left: 50px;
  margin-top: 30px;
  overflow: auto;
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
  padding-bottom: 15px;
}
</style>

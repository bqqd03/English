<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>文章管理</span>
        </template>
        <el-scrollbar :style="{ height: scrollHeight }">
          <el-collapse model-value="englishCatalog" accordion class="category">
            <div v-for="category in englishCatalog">
              <el-collapse-item :title="category.label" :name="category.name">
                <el-collapse model-value="category.textbooks"  accordion class="textbook">
                  <div v-for="textbook in category.textbooks" style="font-size: 50px">
                    <el-collapse-item :title="textbook.label" :name="textbook.id" >
                      <div v-for="essay in textbook.essays" style="padding: 10px">
                        <el-card >
                          <span v-if="essay.isEdit === 1"  @click="startExit(essay)">{{essay.label}}</span>
                          <input v-if="essay.isEdit === 2"  v-model="essay.label" class="title_input" @blur="editTitle(essay)"/>

                          <span v-if="essay.type === 'empty'" style="float: right"> 未添加文章</span>
                          <div v-else style="float: right" >
                            <el-button v-if="class_type.includes(category.label)" @click="startSetting(essay)">设置</el-button>
                            <span v-else >不可操作</span>
                          </div>

                        </el-card>
                      </div>
                    </el-collapse-item>
                  </div>
                </el-collapse>
              </el-collapse-item>
            </div>
          </el-collapse>
        </el-scrollbar>

      </el-card>
  </el-col>

  <el-col :span="7" >
    <el-card>
      <add-essay v-if="addShow"  :englishCatalog="teacherCatalog" @getCatalog="getCatalog"/>
      <select-word v-if="selectShow" :essay_id="options.essay_id" :selectShow="selectShow" @sendShow="sendShow"/>
    </el-card>
    </el-col>
  </el-row>

  <el-dialog v-model="options.dialogSetting" title="文章设置" width="350" >
    <div style="display: flex;justify-content: center;">
      <el-button type="primary" @click="startDegree()">开始选词</el-button>
      <el-button  v-if="options.type==='all'" type="primary" @click="startAudio()">句子音频</el-button>
      <el-button type="danger" @click="deleteData()">删除数据</el-button>
    </div>

  </el-dialog>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import https from "@/apis/axio"
import AddEssay from "../essay_control/components/addEssay.vue"
import SelectWord from "../essay_control/components/selectWord.vue"
import { useRouter } from 'vue-router'
import {ElMessage} from "element-plus";

let class_type = ref()
const router = useRouter()
const englishCatalog = ref()
const teacherCatalog = ref([])
const addShow = ref(true)
const selectShow = ref(false)
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const options = reactive({
  dialogSetting: false,
  editText: true,
  editInput: false,
  essay_id: '',
  type:''
})

onMounted(()=>{
  getTeacherCatalog()
  getCatalog()
})

function getCatalog() {
    https.get('/english/essay_catalog').then(res=>{
      englishCatalog.value = res.data.data
      teacherCatalog.value = englishCatalog.value.filter(function(item) {
        return class_type.value.includes(item.label)
      })
    })
}
function getTeacherCatalog() {
  https.post('/teacher/get_catalog',{'user_id':JSON.parse(localStorage.getItem('token')).user_id}).then(res=>{
    class_type.value = res.data
  })
}

function startSetting(essay) {
  options.dialogSetting = true
  options.essay_id = essay.id
  options.type = essay.type
}

function startDegree() {
  addShow.value = false
  selectShow.value = true
  options.dialogSetting = false
}
function startAudio() {
  router.push({
      name: 'sentence_audio',
      query:{
          essay_id:options.essay_id
      }
  })
}
function sendShow(val) {
    addShow.value = val.addShow
    selectShow.value = val.selectShow
}

function startExit(item) {
  item.isEdit = 2
}
function editTitle(item) {
  https.post('/teacher/essay_label',{'essay_id':item.id,'essay_label':item.label}).then(res=>{
    if (res.data.code===200){
      item.isEdit = 1
      ElMessage.success('标题修改成功')
    }
  })
}
function deleteData() {
  https.post('/teacher/delete_data',{'essay_id':options.essay_id}).then(res=>{
    if (res.data.code===200){
      ElMessage.success('删除成功')
      options.dialogSetting = false
      getCatalog()
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
.textbook {
  border-width: 0;
}
.category{
  border-width: 0;
}
:deep(.el-collapse-item__header){
  font-size: 15px;
  margin: 8px;
  border-width: 0;
}
.title_input{
  width: auto;
  border: 5px;
  font-size: 14px;
  padding: 5px;
}

</style>

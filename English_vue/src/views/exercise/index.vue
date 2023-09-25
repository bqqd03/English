<template>
  <el-card>
    <template #header>
      <span>英语练习</span>
      <div>
        <span style="padding-right: 10px">练习方式</span>
        <el-select v-model="options.mode"  placeholder="">
          <el-option
              v-for="item in mode_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
        </el-select>
      </div>
    </template>

    <el-scrollbar :style="{ height: scrollHeight }">
      <el-collapse model-value="englishCatalog" accordion class="category">
        <div v-for="category in englishCatalog">
          <el-collapse-item :title="category.label" :name="category.name">
            <el-collapse model-value="category.textbooks"  accordion class="textbook">
              <div v-for="textbook in category.textbooks" style="font-size: 50px">
                <el-collapse-item :title="textbook.label" :name="textbook.id" >
                  <div v-for="essay in textbook.essays" style="padding: 10px">
                    <el-card style="width: 98%;margin-left: -100px">
                      <span>{{essay.label}}</span>
                      <div class="card_button" >
                        <span v-if="essay.type === 'empty'" style="float: right"> 未添加文章</span>
                        <el-button v-else @click="startDegree(essay.id)" style="margin-bottom: 20px">开始测试</el-button>
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

  <el-dialog v-model="options.dialogDegreeVisible" title="选择难度" width="300">
    <el-button v-for="item in grade" @click="startText(item.value)">{{ item.label }}</el-button>
  </el-dialog>
</template>

<script setup>
import { useRouter } from 'vue-router'
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import { ElMessage } from "element-plus"
const router = useRouter()
const englishCatalog = ref()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"
const grade = ref()

const options =reactive({
  dialogDegreeVisible: false,
  essay_id:'',
  mode:'nine'
})
const mode_options=[
  {value:'blank',label:'填空'},
  {value:'nine',label:'选择'}
]


onMounted(()=>{
    getCatalog()
})

function getCatalog() {
    https.get('/english/essay_catalog',).then(res=>{
        englishCatalog.value = res.data.data
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}

function startDegree(essay_id) {
  https.post('/english/essay_degree',{'essay_id':essay_id}).then(res=>{
    if (res.data.length === 0){
      ElMessage.error('该文章不可练习')
    } else {
      grade.value = res.data
      options.dialogDegreeVisible = true
      options.essay_id = essay_id
    }
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function startText(grade) {
  if (options.mode==='nine'){
    router.push({
      name: 'nine_grid',
      query:{
        essay_id:options.essay_id,
        grade:grade
      }
    })
  } else if (options.mode==='blank'){
    router.push({
      name: 'blank',
      query:{
        essay_id:options.essay_id,
        grade:grade
      }
    })
  }

  options.dialogDegreeVisible = false
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
  width: 80%;
  position: relative;
  left: 9.5%
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

.card_button{
  float: right;
}
</style>

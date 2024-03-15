<template>
  <span class="add-title">添加作业</span>
  <el-form class="addForm">
    <el-form-item label="部署班级">
      <el-space size="large">
        <el-space style="color: crimson;font-size: 18px">{{class_name}}</el-space>
      </el-space>
    </el-form-item>
    <el-form-item label="作业名称">
      <el-space size="large">
        <el-input v-model="addForm.homework_name" placeholder="请输入作业名称"/>
      </el-space>
    </el-form-item>
    <el-form-item label="所需文章">
      <el-space size="large">
        <el-select v-model="addForm.essay_id" placeholder="请选择练习文章">
          <el-option
              v-for="item in essayList"
              :label="item.label"
              :value="item.value" />
        </el-select>
      </el-space>
    </el-form-item>
    <el-form-item label="文章难度">
      <el-space size="large">
        <el-select v-model="addForm.grade" placeholder="请选择练习文章难度" @change="selectWord()">
          <el-option
              v-for="item in gradeList"
              :label="item.label"
              :value="item.value"/>
        </el-select>
      </el-space>
    </el-form-item>
    <el-form-item label="选词版本">
      <el-space size="large">
        <el-select v-model="addForm.essay_name" placeholder="请选择练习选词版本">
          <el-option
              v-for="item in essayNameList"
              :label="item.label"
              :value="item.value" />
        </el-select>
      </el-space>
    </el-form-item>
    <el-form-item label="练习形式">
      <el-space size="large">
        <el-select v-model="addForm.homework_type" placeholder="请选择练习形式">
          <el-option
              v-for="item in typeList"
              :label="item.label"
              :value="item.value" />
        </el-select>
      </el-space>
    </el-form-item>
    <el-form-item label="发布日期">
      <el-config-provider>
        <el-date-picker
            v-model="addForm.start_date"
            type="datetime"
            placeholder="选择发布日期"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            :disabledDate="start_limit"
        />
      </el-config-provider>
    </el-form-item>
    <el-form-item label="截止日期">
      <el-config-provider>
        <el-date-picker
            v-model="addForm.end_date"
            type="datetime"
            placeholder="选择截止日期"
            format="YYYY-MM-DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            :disabledDate="end_limit"
        />
      </el-config-provider>
    </el-form-item>

    <el-form-item class="formFooter">
      <el-button @click="save()" type="primary">发布</el-button>
    </el-form-item>
  </el-form>

</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import https from "@/apis/axio";
import {ElMessage} from "element-plus";


let class_name=ref()
let essayList=ref([])
let essayNameList=ref([])

// 子组件接收父组件传递过来的值
const props = defineProps({
  classID: String,
})
const myEmit = defineEmits(["getExercise"])
const addForm = reactive({
  homework_name: '',
  class_id:props.classID,
  essay_id:'',
  grade:'',
  essay_name:'',
  homework_type:'',
  start_date:'',
  end_date:''
})
const gradeList=[
  {'label':'简单', 'value':'简单'},
  {'label':'中等', 'value':'中等'},
  {'label':'困难', 'value':'困难'}
]
const typeList=[
  {'label':'填空', 'value':'填空'},
  {'label':'选择', 'value':'选择'},
]

onMounted(()=>{
  const dateTime = new Date(+new Date()+8*3600*1000)
  addForm.start_date = new Date(dateTime).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  https.post('/teacher/class_info',{'class_id':props.classID}).then(res=>{
    class_name.value=res.data.class_name
  })
  https.post('/teacher/essay_list',{'user_id':JSON.parse(localStorage.getItem('token')).user_id}).then(res=>{
    res.data.forEach(item=>{
      essayList.value.push({
        'label':item.title,
        'value':item.essay_id
      })
    })
  })
})


function start_limit(time) { // 禁用今天之前的时间
  return time.getTime() < new Date() - 8.64e7
}
function end_limit(time) { // 禁用今天之前的时间
  if (addForm.start_date ===''){
    return time.getTime() < new Date() - 8.64e7
  } else {
    return time.getTime() < Date.parse(addForm.start_date)
  }
}

function save() {
  https.post('/teacher/add_homework',addForm).then(res=>{
    if (res.data.code===200){
      ElMessage.success('练习添加成功')
      addForm.start_date=''
      addForm.end_date=''
      addForm.homework_name=''
      addForm.essay_id=''
      addForm.grade =''
      myEmit('getExercise')
    } else {
      ElMessage.error(res.data.msg)
    }
  })
}

function selectWord() {
  https.post('/teacher/homework_selectWord',{'essay_id':addForm.essay_id,'grade':addForm.grade}).then(res=>{
    essayNameList.value = res.data
  })
}
</script>

<style scoped lang="scss">
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

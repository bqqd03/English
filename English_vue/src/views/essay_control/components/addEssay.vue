<template>
  <span class="add-title">添加</span>
  <el-form class="addForm">
    <el-form-item label="文章类别">
      <el-space size="large">
        <el-select v-model="addForm.category_info"  @change='getTextbook'   placeholder="请选择类别" filterable allow-create default-first-option>
          <el-option
              v-for="item in englishCatalog"
              :label="item.label"
              :value="item.label" />
        </el-select>
      </el-space>
    </el-form-item>

      <el-form-item label="书籍名称">
        <el-space size="large">
          <el-select v-model="addForm.textbook_info"  @change='getEssay' placeholder="请选择书名" filterable allow-create default-first-option>
            <el-option
                v-for="item in options.textbooks_data"
                :label="item.label"
                :value="item.label" />
          </el-select>
        </el-space>
      </el-form-item>

      <el-form-item label="文章标题">
        <el-space size="large">
          <el-select v-model="addForm.essay_info" @change='getFile'  placeholder="请选择标题" filterable allow-create default-first-option>
            <el-option
                v-for="item in options.essay_data"
                :label="item.label"
                :value="item.id" />
          </el-select>
        </el-space>
      </el-form-item>

      <el-form-item label="文章上传"  v-if="options.file_button">
        <input type="file" multiple  @change="onEssayChange" />
      </el-form-item>
    <el-form-item label="每句词数"  v-if="options.file_button && options.type==='empty'">
      <el-input-number v-model="addForm.word_num" :min="40"/>
    </el-form-item>

      <el-form-item class="formFooter">
        <el-button :disabled="options.btn_disabled" @click="saveCatalog()" type="primary">确 定</el-button>
      </el-form-item>
  </el-form>

</template>

<script setup>
import {reactive} from "vue"
import { ElMessage } from "element-plus"
import https from "@/apis/axio"

// 子组件接收父组件传递过来的值
const props = defineProps({
    englishCatalog: Array,
})

// 子组件调用父组件的函数
const myEmit = defineEmits(["getCatalog"])

const addForm = reactive({
  category_info: '',
  textbook_info: '',
  essay_info:'',
  essay_file: null,
  audio_file: null,
  whisper_file:null,
  word_num:0
})

const options = reactive({
  textbooks_data:[],
  essay_data:[],
  file_button: false,
  type:'',
  btn_disabled:false
})


function getTextbook() {
    addForm.textbook_info=''
    addForm.essay_info=''
    options.file_button = false
    options.textbooks_data=[]
    for (let i=0; i<props.englishCatalog.length; i++){
        const obj = props.englishCatalog[i]
        if (addForm.category_info === obj.label){
            for (let i=0; i<obj.textbooks.length; i++){
                options.textbooks_data.push(obj.textbooks[i])
            }
        }
    }
}

function getEssay() {
    addForm.essay_info=''
    options.file_button = false
    options.essay_data=[]
    for (let i=0; i< options.textbooks_data.length; i++){
        const obj =  options.textbooks_data[i]
        if (addForm.textbook_info === obj.label){
            for (let i=0; i<obj.essays.length; i++){
                if (obj.essays[i].type !== 'all'){
                    options.essay_data.push(obj.essays[i])
                }
            }
        }
    }
}
function getFile() {
  options.file_button = options.essay_data.map(item => item.id).includes(addForm.essay_info)
  options.essay_data.forEach(item=>{
    if (item.id === addForm.essay_info){
      options.type=item.type
    }
  })
  if (!options.file_button){
    options.btn_disabled=false
  }


}
function onEssayChange(e) {
  const files= e.target.files

  for (let i=0;i<files.length;i++){
      if (files[i].name.includes('mp3')){
          addForm.audio_file=files[i]
      } else if (files[i].name.includes('doc')) {
        addForm.essay_file=files[i]
      } else if (files[i].name.includes('xls')) {
          addForm.whisper_file=files[i]
      }
  }
  if (files.length>3){
    ElMessage.error('最多可上传三个文件')
  } else if (files.length===1){
    if (options.type === 'context'){
      ElMessage.error('文本文件已上传，请上传其他文件')
    } else{
      if (addForm.essay_file===null){
        ElMessage.error('请上传文本文件')
      } else {
        options.btn_disabled=false
      }
    }
  } else if (files.length===2){
    if (options.type === 'empty'){
      ElMessage.error('请先上传文本文件')
    } else {
      if (addForm.audio_file===null){
        ElMessage.error('请上传音频文件')
      } else if (addForm.whisper_file===null){
        ElMessage.error('请上传因音频识别文件')
      }else {
        options.btn_disabled=false
      }
    }
  } else if (files.length===3){
    if (options.type === 'context'){
      ElMessage.error('文本文件已上传')
    } else{
      if (addForm.audio_file===null){
        ElMessage.error('请上传音频文件')
      } else if (addForm.essay_file===null){
        ElMessage.error('请上传文本文件')
      } else if (addForm.whisper_file===null){
        ElMessage.error('请上传因音频识别文件')
      }else {
        options.btn_disabled=false
      }
    }
  }
  if (options.btn_disabled){
    addForm.essay_file= null
    addForm.audio_file=null
    addForm.whisper_file=null
  }

}
function saveCatalog() {
  if (addForm.essay_file !== null && addForm.audio_file === null){
    const formData = new FormData();
    formData.append('essay_id', addForm.essay_info)
    formData.append('essay_file', addForm.essay_file)
    formData.append('word_num', addForm.word_num)
    https.post('/teacher/add_essay',formData).then(res=>{
      if (res.data.code===200){
        ElMessage.success('添加成功')
      }
      myEmit('getCatalog')
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
  } else if (addForm.essay_file === null && addForm.audio_file !== null){
    const formData = new FormData();
    formData.append('essay_id', addForm.essay_info)
    formData.append('audio_file', addForm.audio_file)
    formData.append('whisper_file', addForm.whisper_file)
    https.post('/teacher/add_audio',formData).then(res=>{
      if (res.data.code===200){
        ElMessage.success('添加成功')
      }
      myEmit('getCatalog')
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
  } else if (addForm.essay_file !== null && addForm.audio_file !== null){
    const formData = new FormData();
    formData.append('essay_id', addForm.essay_info)
    formData.append('essay_file', addForm.essay_file)
    formData.append('audio_file', addForm.audio_file)
    formData.append('whisper_file', addForm.whisper_file)
    formData.append('word_num', addForm.word_num)
    https.post('/teacher/add_all',formData).then(res=>{
      if (res.data.code===200){
        ElMessage.success('添加成功')
      }
      myEmit('getCatalog')
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
  } else {
    https.post('/teacher/add_catalog',addForm).then(res=>{
      if (res.data.code===200){
        ElMessage.success('添加成功')
      } else {
        ElMessage.error(res.data.message)
      }
      myEmit('getCatalog')
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
  }
  addForm.category_info=''
  addForm.textbook_info=''
  addForm.essay_info=''
  addForm.essay_file= null
  addForm.audio_file=null
  addForm.whisper_file=null
  options.file_button = false
}


</script>

<style lang="scss" scoped>

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

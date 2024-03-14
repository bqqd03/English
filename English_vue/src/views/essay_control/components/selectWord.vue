<template>
  <div class="title">
    <span class="control_degree">文章难度</span>
    <el-button style="margin-top: 18px" type="primary" @click="back()">返回</el-button>
  </div>

  <el-form  style="margin-top: 20px;margin-left: 10px;">
    <el-form-item label="文件上传">
      <el-upload
          ref="upload"
          action="http://127.0.0.1:5000/teacher/upload_essayDifficulty"
          accept=".xls, .xlsx"
          :on-success="onSuccess"
          :before-upload="beforeUpload"
          :limit="1"
          :show-file-list="false">
        <el-button >文件上传</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item  v-if="degree_length !== 0" label="内容修改">
      <el-select v-model="editName"  placeholder="选择要修改的内容" style="width: 120px;margin-right: 15px">
        <el-option
            v-for="item in degree"
            :label="item.label"
            :value="item.value" />
      </el-select>
      <el-button type="primary" @click="selectWord()">修改</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref, watchEffect } from "vue"
import { useRouter } from 'vue-router'
import https from "@/apis/axio"
import {ElMessage} from "element-plus";

const router = useRouter()
const degree=ref()
const upload =ref()
const degree_length=ref()
const editName=ref()
const emit = defineEmits(['sendShow'])
const props = defineProps({
    essay_id: String,
    selectShow: Boolean
})

// 监听引用数据类型的所有属性，一旦运行就会立即监听，组件卸载的时候会停止监听
watchEffect(() => {
    if (props.selectShow){
        getDegree()
    }
})

function getDegree() {
    https.post('/teacher/get_degree',{'essay_id':props.essay_id}).then(res=>{
      degree.value = res.data
      degree_length.value = res.data.length
      editName.value = res.data[0].value
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}
function back() {
    const data={
        addShow: true,
        selectShow:false
    }
    emit('sendShow',data)
}

function selectWord() {

    // router.push({
    //     name: 'select_word',
    //     query:{
    //         essay_id:props.essay_id,
    //         grade:'简单'
    //     }
    // })
  router.push({
    name: 'select_word',
    query:{
      essay_id:editName.value
    }
  })
}
function beforeUpload(file) {
  const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);
  const whiteList = ["xls", "xlsx"];
  if (whiteList.indexOf(fileSuffix) === -1) {
    ElMessage.error('上传文件只能是 xls、xlsx格式')
    return false
  }
}

function onSuccess(response) {
  if (response.code===200){
    ElMessage.success('上传成功')
    upload.value.clearFiles()
  }
}
</script>

<style scoped lang="scss">
.title{
    display: flex;
    justify-content: space-between;
}
.control_degree{
  display: block;
  font-size: 22px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 15px;
}
</style>
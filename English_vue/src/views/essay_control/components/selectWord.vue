<template>
  <div class="title">
    <span class="control_degree">文章难度</span>
    <el-button style="margin-top: 18px" type="primary" @click="back()">返回</el-button>
  </div>

  <el-form  v-for="item in degree"  style="margin-top: 20px;margin-left: 10px;">
    <el-form-item :label="item.label">
      <el-button v-if="item.type === '1'" @click="selectWord(item.label)">修改</el-button>
      <el-button v-if="item.type === '2'" @click="selectWord(item.label)">添加</el-button>
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

function selectWord(grade) {
    router.push({
        name: 'select_word',
        query:{
            essay_id:props.essay_id,
            grade:grade
        }
    })
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
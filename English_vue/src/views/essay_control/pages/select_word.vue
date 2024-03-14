<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>选词详情</span>
        <el-button type="primary" @click.prevent="router.push('essay_control')" >返回</el-button>
      </div>
    </template>

    <el-row :gutter="120">
      <el-col :span="14">
        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="sentence in word_list"  style="display: flex; justify-content: center;overflow: auto">
            <el-card class="card_sentence">
              <template #header>
                <span>{{ '第 '+(sentence.sen_id)+' 句' }}</span>
              </template>

              <div v-for="item in sentence.word_list" style="float: left">
                <el-button @click="selectWord(sentence.sen_id,item.id)" link style="font-size: 20px" v-if="item.id">
                  <span v-if="item.type === 'normal'">{{ item.text }}</span>
                  <span v-if="item.type === 'selected'" style="color: crimson">{{ item.text }}</span>
                </el-button>
                <span v-else>{{ item.text }}</span>
              </div>
            </el-card>
          </div>
        </el-scrollbar>
      </el-col>

        <el-col :span="10">
          <el-scrollbar :style="{ height: scrollHeight }">
            <el-form style="margin: 50px">
              <el-form-item label="文章难度">
                <span class="form_item">{{ selectData.grade }}</span>
              </el-form-item>
              <div v-for="item in select_list">
                <el-form-item :label="'第 '+item.sen_id+' 句'">
                  <span class="form_item">{{ item.select_id.join(", ") }}</span>
                </el-form-item>
              </div>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" style="position: absolute;right: 0">Create</el-button>
              </el-form-item>
            </el-form>
          </el-scrollbar>
        </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router'
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import { ElMessage } from "element-plus"

const route = useRoute()
const router = useRouter()
const selectData = reactive({
    essay_id: route.query.essay_id,
    grade: route.query.grade
})

const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"

let word_list=ref()
let select_list=ref()

onMounted(()=>{
    https.post('/teacher/select_list',{'essay_id':selectData.essay_id, 'grade':selectData.grade}).then(res=>{
        word_list.value = res.data
        const temp=[]
        for (let i=0;i<word_list.value.length;i++){
            const words = word_list.value[i].word_list
            const select_id=[]
            for (let i=0;i<words.length;i++){
                if (words[i].type === 'selected'){
                    select_id.push(words[i].id)
                }
            }
            temp.push({
                essay_id:word_list.value[i].essay_id,
                sen_id: word_list.value[i].sen_id,
                select_id: select_id,
                grade:selectData.grade
            })
        }
        select_list.value=temp
    })
})

function selectWord(sen_id,word_id) {
    const sentence = word_list.value.filter(item => item.sen_id === sen_id)
    const word = sentence[0].word_list.filter(item => item.id === word_id)
    if (word[0].type==='normal'){
        word[0].type='selected'
    } else {
        word[0].type='normal'
    }

    const sentence_list = select_list.value.filter(item => item.sen_id === sen_id)
    const index = sentence_list[0].select_id.indexOf(word_id)
    if (index > -1) {
        sentence_list[0].select_id.splice(index, 1); // 删除元素
    } else {
        sentence_list[0].select_id.push(word_id); // 添加元素
    }
    sentence_list[0].select_id.sort((a, b) => a - b)
}

function onSubmit() {
    https.post('/teacher/selected_word',{'selected_list':select_list.value}).then(res=>{
        if (res.data.code===200){
            ElMessage.success('修改成功')
            router.push('essay_control')
        }
    })
}


</script>

<style scoped lang="scss">
.el-card{
  height: 100%;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_sentence{
    height:auto;
    margin-bottom: 20px;
    width: 80%;
    padding-bottom: 20px;
}
:deep(.el-form-item__label) {
  font-size: 20px;
}
.form_item{
  font-size: 20px;
}
</style>
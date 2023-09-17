<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>答题详情</span>
        <el-button type="primary" @click.prevent="router.push('exercise_result')" >返回</el-button>
      </div>
    </template>

    <el-row :gutter="150">
      <el-col :span="14">
        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="(items,index) in sentence_list"  style="display: flex; justify-content: center;overflow: auto">
            <el-card class="card_sentence">
              <template #header>
                <span>{{ '第 '+(index+1)+' 句' }}</span>
              </template>

              <div v-for="item in items" class="sentence">
                <span v-if="item.type === 'normal'" >{{ item.text }}</span>
                <span v-if="item.type === 'correct'"  style="color: ForestGreen">{{ item.text }}</span>
                <span v-if="item.type === 'wrong'" style="color: crimson" >{{ item.text }}</span>
              </div>
            </el-card>
          </div>
        </el-scrollbar>
      </el-col>

      <el-col :span="10">
        <el-scrollbar :style="{ height: scrollHeight }">
          <el-table :data="word_list" style="width: 100%">
            <el-table-column type="index" label="#" width="50" />
            <el-table-column label="句子" width="100" >
              <template #default="scope">
                <span>{{ '第 '+scope.row.sen_id+' 句' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="text" label="单词" width="130" />
            <el-table-column label="答题次数" width="80" align="center">
              <template #default="scope">
                <span>{{ scope.row.num + ' 次' }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="答题时间" width="100"  align="center"/>
          </el-table>
        </el-scrollbar>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>

import { useRoute,useRouter } from 'vue-router'
import { onMounted,ref } from "vue";
import https from "@/apis/axio"
import { ElMessage } from "element-plus";

const route = useRoute()
const router = useRouter()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"

let sentence_list=ref()
let word_list=ref()

onMounted(()=>{
    getContent()
    getWord()
})

function getContent() {
    https.post('/english/content_result',
        {'user_id':JSON.parse(localStorage.getItem('token')).user_id,
            "essay_id":route.query.essay_id,
            "exercise_num":route.query.exercise_num, 'grade':route.query.grade
        }
    ).then(res=>{
        sentence_list.value = res.data
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}
function getWord() {
    https.post('/english/word_result',
        {'user_id':JSON.parse(localStorage.getItem('token')).user_id,
            "essay_id":route.query.essay_id,
            "exercise_num":route.query.exercise_num, 'grade':route.query.grade
        }
    ).then(res=>{
        word_list.value = res.data
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}

</script>

<style lang="scss" scoped>

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
}
.el-row {
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
}
.el-card{
  height: 100%;
}
.card_sentence{
  height:auto;
  margin-bottom: 20px;
  width: 80%;
  padding-bottom: 20px;
}
.sentence {
  margin: 2px;
  font-size: 18px;
  float: left;
}
</style>
<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>音频句子</span>
        <el-button type="primary" @click.prevent="router.push('essay_control')" >返回</el-button>
      </div>
    </template>

    <el-row :gutter="120">
      <el-col :span="14">
        <el-scrollbar :style="{ height: scrollHeight }">
          <div v-for="sentence in sentence_list"  style="display: flex; justify-content: center;overflow: auto">
            <el-card class="card_sentence">
              <template #header>
                <span>{{ '第 '+(sentence.sen_id)+' 句' }}</span>
                <div>
                  <span>{{'开始时间：'+sentence.audio_start}}</span>
                  <span>{{'结束时间：'+sentence.audio_end}}</span>
                </div>
              </template>

              <span >{{ sentence.article }}</span>
            </el-card>
          </div>
        </el-scrollbar>
      </el-col>

      <el-col :span="10">
        <el-button style="" type="primary" @click="restAudio" >重新开始</el-button>
        <el-button v-if="!btn_play" style="" type="primary" @click="playAudio" >播放音频</el-button>
        <el-button v-if="btn_play" style="" type="primary" @click="endAudio" >暂停音频</el-button>
        <el-button style="" type="primary" @click="sentenceAudio" >句子开始音频</el-button>
        <el-button style="" type="primary" @click="saveAudio" >保存</el-button>
      </el-col>
    </el-row>
  </el-card>

  <audio ref="audioPlayer" :src="audio_address" />
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router'
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import { ElMessage } from "element-plus"

const route = useRoute()
const router = useRouter()
const scrollHeight = (document.documentElement.clientHeight - 200).toString() + "px"

let clock = null //计时器
let btn_play = ref(false)
let sentence_list=ref()
let audio_address=ref()
let audioPlayer=ref()
let options=reactive({
    sentence_start:0,
    clock:0,
    sentence_id:0
})

onMounted(()=>{
    https.post('/teacher/sentence_audio',{'essay_id':route.query.essay_id}).then(res=>{
        sentence_list.value = res.data.data
        audio_address.value =res.data.audio_address

    })
})

function restAudio() {
    audioPlayer.value.pause()
    clearInterval(clock)
    clock = null
    options.sentence_start=0
    options.clock=0
    options.sentence_id= 0
    btn_play.value=false
}
function playAudio() {
    audioPlayer.value.currentTime = options.sentence_start
    btn_play.value=true
    // 开始播放音频
    audioPlayer.value.play()
    clock = setInterval(() => {
        options.clock++
    }, 1000)
}
function endAudio() {
    audioPlayer.value.pause()
    btn_play.value=false
    clearInterval(clock)
    clock = null
    options.sentence_start=options.clock
}
function sentenceAudio() {
    options.sentence_start=options.clock
    if (options.sentence_id===0){
        sentence_list.value[options.sentence_id].audio_start=options.sentence_start
    } else {
        sentence_list.value[options.sentence_id].audio_start=options.sentence_start
        sentence_list.value[options.sentence_id-1].audio_end=options.sentence_start
    }

    options.sentence_id ++
}
function saveAudio() {
  sentence_list.value[options.sentence_id-1].audio_end=options.clock
  https.post('/teacher/save_audio',{'data':sentence_list.value}).then(res=>{
      if (res.data.code===200){
          ElMessage.success('成功')
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
</style>
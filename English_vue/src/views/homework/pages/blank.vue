<template>
  <el-button @click="back">返回</el-button>
  <el-progress :percentage="essay.percentage" :show-text="false"  style="padding: 60px 60px 20px;"/>
  <div class="nine_title">
    <el-text style="margin-right: 20px;font-size: 20px">填空</el-text>
    <el-breadcrumb separator="/" style="font-size: 20px">
      <el-breadcrumb-item>{{ essay.current_sentence + 1 }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ essay.essay_length }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="sentence_box">
    <div v-for="item in word_list" class="sentence">
      <span  v-if="item.type==='normal'">{{ item.text }}</span>
      <span  v-if="item.type==='correct'" style="color: ForestGreen">{{ item.text }}</span>
      <span  v-if="item.type==='error'" style="color: crimson" >{{ item.text }}</span>
      <input v-if="item.type==='select' && item.status!=='error'" v-model="item.answer" @change="blank_check(item)" class="answer_input"/>
      <input v-if="item.type==='select' && item.status==='error'" v-model="item.answer" @change="blank_check(item)" class="error_input"/>
    </div>
  </div>
  <div class="translate" v-show="options.translate_btn">{{ translate }}</div>


  <div class="control">
    <div class="fun1" @click="re"/>
    <div class="essay_control">
      <div class="arrow_l" @click="sentence_prev"/>
      <div class="play" @click="play" :class="[options.isPlay ? 'pause_button' : 'play_button']"/>
      <div class="arrow_r" @click="sentence_next"/>
    </div>
    <div class="translate_btn" @click="translate_btn"/>
  </div>

  <audio ref="audioPlayer" :src="audio_address" />
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import https from "@/apis/axio"
import { ElMessage } from "element-plus"

const router = useRouter()
const route = useRoute()
const essay = reactive({
  essay_data:[], // 保存整篇文章的数据
  essay_length:'', // 保存句子的数量
  select_word:[],
  percentage: 0, //保存进度条的数据
  current_sentence: 0, //保存当前练习的句子
  current_word: 0, //保存当前要选择的单词
  start_audio:'',
  pause_audio:'',
  end_audio:''
})

const options = reactive({
  translate_btn: false, //管理翻译的存在
  isPlay: false, //管理录音开关的按钮
  word_num : 1,
  select_time: 0,
  select_num:0
})

let word_list = [] //保存处理完的句子
let translate=ref() // 保存翻译
let audioPlayer=ref()
let audio_address= ref()
let timer = null //定时器
let clock = null //计时器

const result_sentence=reactive({
  user_id: JSON.parse(localStorage.getItem('token')).user_id,
  homework_id:route.query.homework_id,
  sen_id:'',
  word:'',
  num:'',
  time:''
})
const result_essay=reactive({
  user_id: JSON.parse(localStorage.getItem('token')).user_id,
  homework_id:route.query.homework_id,
  score: 0,
  time:''
})

onMounted(()=>{
  https.post('/student/sentence',
      {'homework_id':route.query.homework_id,
        'user_id':JSON.parse(localStorage.getItem('token')).user_id
      }
  ).then(res=>{
    essay.essay_data=res.data.data
    audio_address.value =res.data.audio_address
    essay.essay_length=res.data.data.length
    essay.current_sentence = res.data.start_id
    options.all_num = res.data.all_num
    options.correct_num = res.data.correct_num
    options.clock = res.data.time
    if (res.data.time!==0){
      options.select_time=res.data.time
    }
    essay.percentage= ((essay.current_sentence+1) / parseInt(essay.essay_length) )*100
    handleText(essay.essay_data[essay.current_sentence])
    clock = setInterval(() => {
      options.clock++
    }, 1000)
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
})

// 控制翻译按钮
function translate_btn() {
  if (translate !== '' && translate !== null){
    options.translate_btn = !options.translate_btn
  } else {
    ElMessage.error('该句子没有翻译内容')
  }

}
function play() {
  if (audio_address.value !== '' && audio_address.value !== null){
    //切换icon
    options.isPlay = !options.isPlay
    //播放/暂停
    if (options.isPlay) {
      // 设置音频的当前位置为第3秒
      audioPlayer.value.currentTime = essay.pause_audio
      // 开始播放音频
      audioPlayer.value.play()
      essay.isPlaying = true
      timer= setTimeout(() => {
        audioPlayer.value.pause()
        options.isPlay = false
        essay.pause_audio = essay.start_audio
      }, (essay.end_audio - essay.pause_audio) * 1000)
    }  else {
      essay.pause_audio = audioPlayer.value.currentTime
      clearTimeout(timer)
      audioPlayer.value.pause()
      options.isPlay = false
    }
  } else {
    ElMessage.error('该句子没有音频')
  }

}

// 将每个句子进行处理
function handleText(sentenceData) {
  result_sentence.sen_id = sentenceData.sen_id
  options.select_num = sentenceData.select_num
  translate = sentenceData.translate
  essay.start_audio = sentenceData.audio_start
  essay.end_audio = sentenceData.audio_end
  essay.pause_audio = essay.start_audio
  word_list=sentenceData.article


  word_list.forEach(item=>{
    if (item['type'] ==='select'){
      item['answer']=''
    }
  })
}

// 下一句
function sentence_next() {
  if (essay.select_word.length === 0){
    options.translate_btn = false
    options.isPlay = false
    audioPlayer.value.pause()
    clearTimeout(timer)
    if (result_sentence.word.split(',').filter(item => item !== '').length === options.select_num && result_sentence.word!==''){
      https.post('/student/sentence_result',result_sentence).then(()=>{
        result_sentence.word =''
        result_sentence.num =''
        result_sentence.time=''
      }).catch(()=>{
        ElMessage.error('未连接到服务器')
      })
    }

    if (essay.current_sentence < essay.essay_length - 1) {
      //显示的句子跟随变化
      essay.current_sentence++
      essay.percentage= ( (essay.current_sentence+1) / parseInt(essay.essay_length) )*100
      options.translate_btn = false
      options.isPlay = false
      audioPlayer.value.pause()
      handleText(essay.essay_data[essay.current_sentence])
    } else {
      result_essay.score = (options.correct_num / options.all_num) * 100
      result_essay.time = options.clock.toString()
      clearInterval(clock)
      https.post('/student/homework_result',result_essay).then(res=>{
        if (res.data.code === 200){
          ElMessage.success('提交成功')
          router.push('/homework')
        }
      }).catch(()=>{
        ElMessage.error('未连接到服务器')
      })
    }
  } else {
    ElMessage.error('请做完当前题')
  }
}

// 上一句
function sentence_prev() {
  if (essay.current_sentence > 0) {
    essay.current_sentence--
    essay.percentage= ((essay.current_sentence+1) / essay.essay_length )*100
    options.translate_btn = false
    options.isPlay = false
    clearTimeout(timer)
    audioPlayer.value.pause()
    handleText(essay.essay_data[essay.current_sentence])
  } else {
    ElMessage('已经是第一句')
  }
}

function back() {
  clearTimeout(timer)
  clearInterval(clock)
  audioPlayer.value.pause()
  router.push('/student_class')
}

function blank_check(item) {
  let current_word=''
  essay.select_word = word_list.filter((item) => item.type === 'select')

  essay.select_word.forEach(e=>{
    if (item.id=== e.id) {
      current_word=e.text
    }
  })

  if (item.answer === current_word){
    essay.select_word.shift()

    if (options.word_num === 1 ){
      options.correct_num ++
      item.type = 'correct'
    } else {
      item.type = 'error'
    }

    result_sentence.word += item.id.toString()+','
    result_sentence.num += options.word_num.toString()+','
    result_sentence.time += (options.clock - options.select_time).toString()+','
    options.select_time = options.clock
    options.word_num = 1
    options.all_num ++


    if (essay.select_word.length===0){
      sentence_next()
    }
  } else {
    item['status'] = 'error'
    options.word_num ++
  }
}

</script>

<style lang="scss" scoped>
.nine_title{
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;

}
.sentence_box{
  display: flex;
  flex-direction: row;
  padding: 60px;
  flex-wrap: wrap;
}
.sentence {
  margin: 5px;
  font-size: 20px;
}

.translate {
  padding-left: 80px;
  font-size: 20px;
}
.select_grid{
  bottom: 250px;
  left: 600px;
  right: 600px;
  position:fixed;
  display: flex;
  flex-wrap: wrap;
}

.nine_btn {
  width: 150px;
  height: 60px;
  background-color: #7caadc;
  color: #000;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
}
.error_btn {
  width: 150px;
  height: 60px;
  background-color: crimson;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
}
.control {
  display: flex;
  justify-content: space-between;
  position:fixed;
  bottom: 100px;
  left: 730px;
}
.translate_btn {
  width: 50px;
  height: 50px;
  margin-left: 50px;
  background: url(/assets/icons/translate_btn.png);
  background-size: 50px 50px;
}

.play {
  width: 50px;
  height: 50px;
  margin-left: 8px;

}
.play_button {
  background: url(/assets/icons/play.png);
  background-size: 50px 50px;
}
.pause_button {
  background: url(/assets/icons/pause.png);
  background-size: 50px 50px;
}
.essay_control {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.arrow_l {
  width: 50px;
  height: 50px;
  background: url(/assets/icons/arrow-left.png);
  background-size: 50px 50px;
}
.arrow_r {
  width: 50px;
  height: 50px;
  background: url(/assets/icons/arrow-right.png);
  background-size: 50px 50px;
}
.answer_input{
  width: 80px;
  border: 0;
  border-bottom:2px solid #000;
  font-size: 20px;
}
.error_input{
  width: 80px;
  border: 0;
  border-bottom:2px solid #000;
  font-size: 20px;
  color: crimson;
}
</style>

<template>
  <el-button @click="back">返回</el-button>
  <el-progress :percentage="essay.percentage" :show-text="false"  style="padding: 60px 60px 20px;"/>
  <div class="nine_title">
    <el-text style="margin-right: 20px;font-size: 20px">九宫格</el-text>
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
      <span  v-if="item.type==='select'" >{{ "________" }}</span>
     </div>
  </div>
  <div class="translate" v-show="options.translate_btn">{{ translate }}</div>

  <div class="select_grid" style="margin-left: 50px" >
    <div style="margin-top: 5px;margin-left: 5px;" v-for="item in essay.nine_select" :key="item.id" >
      <el-button v-if="item.status==='error'" class="error_btn" @click="select_btn(item)">{{ item.text }}</el-button>
      <el-button v-else class="nine_btn" @click="select_btn(item)">{{ item.text }}</el-button>
    </div>
  </div>

  <div class="control">
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
  select_word:[], //保存选择出来的单词
  nine_select:[], //保存九宫格里的单词
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
  select_num:0,
  mode: route.query.mode
})

let word_list = [] //保存处理完的句子
let translate=ref() // 保存翻译
let audioPlayer=ref()
let audio_address= ref()
let timer = null //定时器
let clock = null //计时器

const result_sentence=reactive({
    user_id: JSON.parse(localStorage.getItem('token')).user_id,
    essay_id:route.query.essay_id,
    grade:route.query.grade,
    sen_id:'',
    word:'',
    num:'',
    time:'',
    exercise_num:'',
    essay_name:''
})
const result_essay=reactive({
    user_id: JSON.parse(localStorage.getItem('token')).user_id,
    essay_id:route.query.essay_id,
    grade:route.query.grade,
    score: 0,
    time:'',
    exercise_num:'',
    essay_name:''
})

onMounted(()=>{
    https.post('/english/sentence',
        {'essay_id':route.query.essay_id,
            'grade':route.query.grade,
            'user_id':JSON.parse(localStorage.getItem('token')).user_id
        }
    ).then(res=>{
      essay.essay_data=res.data.data
      result_essay.essay_name=res.data.essay_name
      result_sentence.essay_name=res.data.essay_name
      audio_address.value = res.data.audio_address
      essay.essay_length=res.data.data.length
      result_essay.exercise_num = res.data.exercise_num
      result_sentence.exercise_num = res.data.exercise_num

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
  console.log(audio_address.value)
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

  getNine()
}

// 处理九宫格中的单词
function getNine() {
  essay.select_word = word_list.filter((item) => item.type === 'select')
  if ( essay.select_word.length === 0){
    essay.nine_select=[]
  } else {
    essay.current_word = essay.select_word[0].id
    essay.nine_select= shuffleArray(essay.select_word)
  }
}

// 将九宫格里的数据数据排序
function shuffleArray(arr) {
  let newArr = Array.from(arr)
  if (newArr.length > 9){
      newArr = newArr.slice(0, 9)

      // 数组的sort()方法可以接受一个函数作为参数，用于自定义排序。这个函数有两个参数，分别是要比较的两个元素。
      // 如果这个函数返回一个小于0的值，则表示第一个元素在排序后应该排在第二个元素之前；
      // 如果返回一个大于0的值，则表示第一个元素在排序后应该排在第二个元素之后；
      // 如果返回0，则表示两个元素的顺序不变。
      newArr.sort(() => Math.random() - 0.5)
  } else {
      newArr.sort(() => Math.random() - 0.5)
  }
  return newArr
}

// 九宫格选择判断
function select_btn(e) {
  let count = 0
  if (essay.current_word === e.id) {
    essay.select_word.shift()

    word_list.forEach(word => {
        delete word.status
    })

    if (options.word_num === 1 ){
        options.correct_num ++
      e.type = 'correct'
    } else {
      e.type = 'error'
    }

    result_sentence.word += e.id.toString()+','
    result_sentence.num += options.word_num.toString()+','
    result_sentence.time += (options.clock - options.select_time).toString()+','
    options.select_time = options.clock
    options.word_num = 1
    options.all_num ++


    if (essay.select_word.length!==0){
        getNine()
    } else {
        sentence_next()
    }
  } else {
    e['status'] = 'error'
    word_list.forEach(word => {
        if (word.status==='error'){
            count +=1
        }
    })
    if (count===3){
        word_list.forEach(word => {
            delete word.status
        })
        getNine()
        count = 0
    }
    options.word_num ++
  }
}

// 下一句
function sentence_next() {
  if (essay.select_word.length === 0){
    options.translate_btn = false
    options.isPlay = false
    audioPlayer.value.pause()
    clearTimeout(timer)
    if (result_sentence.word.split(',').filter(item => item !== '').length === options.select_num && result_sentence.word!==''){
      https.post('/english/result_sentence',result_sentence).then(()=>{
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
      https.post('/english/result_essay',result_essay).then(res=>{
        if (res.data.code === 200){
            ElMessage.success('提交成功')
            router.push('/exercise')
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
  https.post('/english/exercise_back',
      {'essay_id':route.query.essay_id,
        'exercise_num':result_essay.exercise_num,
        'essay_name':result_essay.essay_name,
        'user_id':JSON.parse(localStorage.getItem('token')).user_id
      }
  ).then(()=>{
    clearTimeout(timer)
    clearInterval(clock)
    audioPlayer.value.pause()
    router.push('/exercise')
  })
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
  bottom: 25%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-wrap: wrap;
  width: 600px;
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
  position: absolute;
  left: 52%;
  transform: translate(-49%);
  bottom: 10%;
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

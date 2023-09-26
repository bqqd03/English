<template>
	<uni-nav-bar :fixed="true"  status-bar left-icon="left" title="填空练习" @clickLeft="home()" background-color="#F5F5F5" :border="false" />
	
	<progress :percent="essay.percentage" style="padding: 12px 10px 8px;" />
	<text style="padding: 8px 10px;">填空&nbsp&nbsp{{ essay.current_sentence + 1 }}/{{ essay.essay_length }}</text>
	
	<view class="sentence_box" >
		<view v-for="item in word_list" class="sentence">
		  <text v-if="item.type=='normal'" >{{ item.text }}</text>
		  <text v-if="item.type=='correct'" style="color: ForestGreen">{{ item.text }}</text>
		  <text v-if="item.type=='error'" style="color: crimson" >{{ item.text }}</text>
		  <input v-if="item.type=='select' && item.status=='error'" v-model="item.answer" @blur="blank_check(item)" class='error_input' auto-blur/>
		  <input v-if="item.type=='select' && item.status!='error'" v-model="item.answer" @blur="blank_check(item)" class='answer_input' auto-blur/>
		</view>
	</view>
	
	<text class="translate_text" v-if="options.translate_show">{{essay.translate}}</text>
	
	<view class="control">
		<view class="audio_control">
			<image src="/static/icons/back.png" style="width: 35px;height: 35px;margin-right: 8px;" @click="back()"/>
			<image v-if="options.isPlay==true" src="/static/icons/play.png" style="width: 35px;height: 35px;"  @click="pause_audio()"/>
			<image v-if="options.isPlay==false" src="/static/icons/pause.png" style="width: 35px;height: 35px;" @click="play_audio()"/>
			<image src="/static/icons/forward.png" style="width: 35px;height: 35px;margin-left: 8px;" @click="forward()"/>
		</view>
		<image src="/static/icons/translate.png" class="translate_btn" @click="translate()"/>
	  </view>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app"
import https from '../../axios.js'
import { reactive, ref } from "vue"
import common from"@/common/js/common.js"

let word_list = ref()
let timer = null //定时器
let clock = null //计时器

const audioContext = uni.createInnerAudioContext()
const essay = reactive({
  essay_data:[], // 保存整篇文章的数据
  essay_length:'', // 保存句子的数量
  select_word:[], //保存选择出来的单词
  nine_select:[], //保存九宫格里的单词
  percentage: 0, //保存进度条的数据
  current_sentence: 0, //保存当前练习的句子
  current_word: 0, //保存当前要选择的单词
  start_audio:'', //音频开始时间
  pause_audio:'', //音频暂停时间
  end_audio:'', //音频结束时间
  translate:''
})
const options = reactive({
  translate_show: false, //管理翻译的存在
  isPlay: false, //管理录音开关的按钮
  word_num : 1,
  correct_num: 0,
  all_num: 0,
  clock: 0,
  select_time: 0,
  select_num:0,
})
const result_sentence=reactive({
    user_id: JSON.parse(uni.getStorageSync('token')).user_id,
    essay_id:'',
    grade:'',
    sen_id:'',
    word:'',
    num:'',
    time:'',
    exercise_num:'',
})
const result_essay=reactive({
    user_id: JSON.parse(uni.getStorageSync('token')).user_id,
    essay_id:'',
    grade:'',
    score: 0,
    time:'',
    exercise_num:'',
})

onLoad(e=>{
	result_essay.essay_id = e.essay_id
	result_sentence.essay_id = e.essay_id
	result_essay.grade = e.grade
	result_sentence.grade = e.grade
	
	https.post('/english/sentence',
	    {'essay_id':e.essay_id,
	    'grade':e.grade,
	    'user_id':JSON.parse(uni.getStorageSync('token')).user_id
	    }
	).then(res=>{
		essay.essay_data=res.data.data
		essay.essay_length=res.data.data.length
		audioContext.src= common.fronturl+ res.data.audio_address
		result_essay.exercise_num = res.data.exercise_num
		result_sentence.exercise_num = res.data.exercise_num
		essay.current_sentence = res.data.start_id
		essay.percentage= ((essay.current_sentence+1) / parseInt(essay.essay_length) )*100
		handleText(essay.essay_data[essay.current_sentence])
		clock = setInterval(() => {
			options.clock++
		}, 1000)
	})
})

// 将每个句子进行处理
function handleText(sentenceData) {
	result_sentence.sen_id = sentenceData.sen_id
	options.select_num = sentenceData.select_num
	
	essay.translate = sentenceData.translate
	essay.start_audio = sentenceData.audio_start
	essay.end_audio = sentenceData.audio_end
	essay.pause_audio = essay.start_audio
	
	word_list.value=sentenceData.article
	word_list.value.forEach(item=>{
	  if (item['type'] ==='select'){
		item['answer']=''
	  }
	})
}

//音频播放
function play_audio() {
	if (audioContext.src != ''){
		options.isPlay = true
		audioContext.seek(essay.pause_audio);
		audioContext.play()
		timer= setTimeout(() => {
			audioContext.pause()
			options.isPlay = false
			essay.pause_audio = essay.start_audio
		}, (essay.end_audio - essay.pause_audio) * 1000)
	} else {
		uni.showToast({
			title: "该句子没有音频",
			position:'bottom'
		})
	}
   
}

//音频暂停
function pause_audio() {
	clearTimeout(timer)
    options.isPlay = false
	essay.pause_audio = audioContext.currentTime
	audioContext.pause()
}

function translate(){
	if (essay.translate != '' && essay.translate != null){
		if (options.translate_show == false){
			options.translate_show = true
		} else {
			options.translate_show = false
		}
	} else {
		uni.showToast({
			title: "该句子没有翻译内容",
			position:'bottom'
		})
	}
	
}

// 下一句
function forward() {
  if (essay.select_word.length == 0){
    options.translate_show = false
    options.isPlay = false
    audioContext.pause()
    if (result_sentence.word.split(',').filter(item => item !== '').length == options.select_num && result_sentence.word!=''){
      https.post('/english/result_sentence',result_sentence).then(()=>{
        result_sentence.word =''
        result_sentence.num =''
        result_sentence.time=''
      })
    }

    if (essay.current_sentence < essay.essay_length - 1) {
		essay.current_sentence++
		essay.percentage= ( (essay.current_sentence+1) / parseInt(essay.essay_length) )*100
		options.translate_show = false
		options.isPlay = false
		audioContext.pause()
		handleText(essay.essay_data[essay.current_sentence])
    } else {
		result_essay.score = (options.correct_num / options.all_num) * 100
		result_essay.time = options.clock.toString()
		clearInterval(clock)
		https.post('/english/result_essay',result_essay).then(res=>{
			if (res.data.code === 200){
				uni.showToast({
					title: '提交成功',
					icon: 'success',
					duration: 3000
				}),
				uni.navigateBack()
			}
		})
    }
  } else {
	  uni.showToast({
	  	title: "请做完当前题",
	  	position:'bottom'
	  })
  }
}

// 上一句
function back() {
    if (essay.current_sentence > 0) {
		essay.current_sentence--
        essay.percentage= ((essay.current_sentence+1) / essay.essay_length )*100
        options.translate_show = false
        options.isPlay = false
        audioContext.pause()
        handleText(essay.essay_data[essay.current_sentence])
    } else {
		uni.showToast({
			title: "已经是第一句",
			position:'bottom'
		})
    }
}

// 填空答案判断
function blank_check(e) {
	let current_word=''
	essay.select_word = word_list.value.filter((item) => item.type === 'select')
	
	essay.select_word.forEach(item=>{
		if (item.id=== e.id) {
		  current_word=item.text
		}
	})
	if (current_word === e.answer) {
		essay.select_word.shift()
		
		word_list.value.forEach(word => {
			delete word.status
		})

		if (options.word_num === 1 ){
			options.correct_num ++
			e['type'] = 'correct'
		} else {
			e['type'] = 'error'
		}

		result_sentence.word += e.id.toString()+','
		result_sentence.num += options.word_num.toString()+','
		result_sentence.time += (options.clock - options.select_time).toString()+','
		options.select_time = options.clock
		options.word_num = 1
		options.all_num ++


		if (essay.select_word.length===0){
			forward()
		}
	} else {
		e['status'] = 'error'
		options.word_num ++
	}
}

function home(){
	audioContext.pause()
	clearInterval(clock)
	uni.navigateBack()
}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.sentence_box{
		margin: 20px 10px;
	    display: flex;
	    flex-direction: row;
		flex-wrap: wrap;
	}
	.sentence {
		margin: 2px;
		font-size: 18px;
		display: flex;
	
	}
	.control {
	    display: flex;
	    justify-content: space-between;
		position:fixed; 
		bottom: 100rpx;
	}
	.audio_control {
		position:fixed;
	    display: flex;
		left: 250rpx;
	}
	.translate_btn{
		width: 35px;
		height: 35px;
		position:fixed;
		right: 80rpx;
	}
	.translate_text{
		margin: 13px;
		font-size: 18px;
		display: flex;
	}
	.answer_input{
		width: 100rpx;
		border-bottom:1px solid #000;
	}
	.error_input{
		width: 100rpx;
		border-bottom:1px solid #000;
		color: crimson;
	}
	/deep/ .uni-nav-bar-text {
	  font-size: 32rpx !important;
	  font-weight: bold;
	}
</style>
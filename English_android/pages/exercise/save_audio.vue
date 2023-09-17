<template>
	<!-- 一级循环 -->
	<view v-for="category in englishCatalog"  :class="category.show?'oneshow':'onehide'">
		<view class="pronames-one-label" @click="categorylist(category.id)">
			<text>{{category.label}}</text>
			<uni-icons v-if="category.show==false" type="forward"></uni-icons>
			<uni-icons v-if="category.show==true" type="bottom"></uni-icons>
		</view>
		<!-- 二级循环 -->
		<view class="pronames_two" v-for="textbook in category.textbooks"  :class="textbook.show?'twoshow':'twohide'">
			<view class="pronames-two-label" @click="textbooklist(textbook.pid,textbook.id)">
				<text>{{textbook.label}}</text>
				<uni-icons v-if="textbook.show==false" type="forward"></uni-icons>
				<uni-icons v-if="textbook.show==true" type="bottom"></uni-icons>
			</view>
			<view class="pronames_three">
				<!-- 三级循环 -->
				<view class="pronames_three-label" v-for="essay in textbook.essays">
					<text class="essay_label">{{essay.label}}</text>
					
					<button type="primary" class="small-button" @click="save(essay.id)">开始缓存</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { onShow } from "@dcloudio/uni-app"
import https from '@/axios';
import { reactive, ref } from "vue"

let essay_list=[]
let englishCatalog = ref()

onShow(()=>{
	https.post('/english/essay_list').then(res=>{
		essay_list=res.data
	})
	getCatalog()
})

function getCatalog() {
    https.get('/english/essay_catalog',).then(res=>{
        let temp =  res.data.data
		temp.forEach(item => {
			item.show = false
			item.textbooks.forEach(item1 => {
				item1.show = false
				item1.essays.forEach(item2 => {
					item2.show = false
				})
			})
		})
		englishCatalog.value = temp
    }).catch(()=>{
		uni.showToast({
			title: '未连接到服务器',
			icon: 'error',
			duration: 3000
		}) 
	})
}

function categorylist(id) {
	englishCatalog.value.forEach(item=>{
		if (item.id == id){
			if(item.show == false){
				item.show = true;
			}else{
				item.show = false;
			}
		} else {
			item.show = false
		}
		
	})

}

function textbooklist(pid,id) {
	englishCatalog.value.forEach(item => {
		if (item.id == pid){
			item.textbooks.forEach(item1=>{
				if (item1.id == id){
					if(item1.show == false){
						item1.show = true;
					}else{
						item1.show = false;
					}
				} else {
					item1.show = false
				}
			})
		}
	})
}

function save(id){
	console.log('开始缓存');
	let url_audio=''
	essay_list.forEach(item=>{
		if (item.essay_id === id){
			url_audio=item.audio_address
		}
	})
	let dtask=plus.downloader.createDownload('http://192.168.43.200:8090'+url_audio,{filename:'/static/audios/'},{
		function(d, status) {
			console.log(d);
			//d为下载的文件对象
			if (status == 200) {
				//下载成功,d.filename是文件在保存在本地的相对路径，使用下面的API可转为平台绝对路径
				let fileSaveUrl = plus.io.convertLocalFileSystemURL(d.filename);
				console.log(fileSaveUrl);
				console.log(d);
			} else {
				//下载失败
				plus.downloader.clear(); //清除下载任务
			}
		}
	})
	dtask.start();
}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	.pronames-one-label {
		background-color: #fff;
		line-height: 110rpx;
		box-sizing: border-box;
		padding: 0px 3%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2px #eaeaea solid;
	}
	
	.pronames-one-label text {
		font-size: 15px;
	}
	
	/* 二级 */
	.pronames-two-label {
		background-color: #fff;
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0px 3%;
		border-bottom: 1px #eee solid;
	}
	
	.pronames-two-label text {
		font-size: 15px;
		margin-left: 5%;
	}
	
	
	/* 三级 */
	.pronames_three-label {
		background-color: #fff;
		width: 97%;
		padding-left: 3%;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		flex-direction: row;
		border-bottom: 1px #f1f1f1 solid;
		align-items: center;
	}
	.essay_label{
		font-size: 15px;
		margin-left: 8%;
		width: 60%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	
	/* 展开收起效果 start */
	
	.oneshow .pronames_two{ display: block; }
	.onehide .pronames_two{ display: none; }
	
	/* 展开收起效果 end */	
	
	.twoshow .pronames_three{ display: block; }
	.twohide .pronames_three{ display: none; }
	
	.small-button {
	  font-size: 12px; 
	  border-radius: 4px;
	  margin-right: 10px;
	  width: 22%;
	}
</style>
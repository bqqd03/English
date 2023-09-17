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
					
					<text v-if="essay.type === 'empty'" style="position:fixed;display: flex;right: 28rpx;font-size: 14px;">未添加文章</text>
					<button v-else class="small-button" @click="startSetting(essay)">设置</button>
					
				</view>
			</view>
		</view>
	</view>
</template>



<script setup>
import { reactive, ref } from "vue"
import https from '../../axios.js'
import { onShow } from "@dcloudio/uni-app"

let englishCatalog = ref()
let grade = ['简单','中等','困难']

onShow(()=>{
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

function startSetting(essay){
	if (essay.type=='context'){
		uni.showActionSheet({
			title: '设置选择',
			itemList: ['句子选词'],
			success: (item) => {
				uni.showActionSheet({
					title: '难度选择',
					itemList: grade,
					success: (item1) => {
						uni.navigateTo({
							url: '/pages/essay_control/select_word?grade='+grade[item1.tapIndex]+'&essay_id='+essay.id
						})
					}
				})
			}
		})
	}
	else if (essay.type=='all'){
		uni.showActionSheet({
			title: '设置选择',
			itemList: ['句子选词','句子音频'],
			success: (item) => {
				if (item.tapIndex == 0){
					uni.showActionSheet({
						title: '难度选择',
						itemList: grade,
						success: (item1) => {
							uni.navigateTo({
								url: '/pages/essay_control/select_word?grade='+grade[item1.tapIndex]+'&essay_id='+essay.id
							})
						}
					})
				} else {
					uni.navigateTo({
						url: '/pages/essay_control/sentence_audio?essay_id='+essay.id
					})
				}
			}
		})
	}
	
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
		width: 60%;
		font-size: 15px;
		margin-left: 8%;
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
	  width: 120rpx;
	  position: fixed;
	  right: 30rpx;
	}
</style>
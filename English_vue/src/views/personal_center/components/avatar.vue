<template>
  <div style="display: flex;flex-direction: column;">
    <img :src="avatarUrl" alt="Avatar" style="margin-bottom: 50px;height: 300px;width: 300px"/>
    <el-button @click="uploadDialog=true" type="primary">上传头像</el-button>
  </div>

  <el-dialog v-model="uploadDialog" title="更换头像" width="560px">
    <div class="container">
      <div class="left">
        <div class="big-image-preview">
          <vueCropper
              ref="cropperRef"
              :img="handleAvatarUrl"
              :info-true="true"
              :auto-crop="true"
              :fixed-box="false"
              :can-move="false"
              :fixed="true"
              :full="true"
              :center-box="true"/>
        </div>
        <div class="tool">
          <el-button type="primary" @click="chooseImage">上传</el-button>
          <el-button type="primary" @click="uploadImage">确定</el-button>
        </div>

      </div>
    </div>
    <input
        v-show="false"
        ref="avatarRef"
        type="file"
        accept="image/png, image/jpeg"
        @change="getImageInfo" />
  </el-dialog>
</template>

<script setup>
import {onMounted, ref} from "vue"
import { VueCropper }  from "vue-cropper"
import {ElMessage} from "element-plus"
import https from "@/apis/axio"


const emit = defineEmits(['clickChild'])
const avatarUrl = ref('')
const handleAvatarUrl = ref('')
const cropperRef=ref({})
const avatarRef=ref({})
const username=ref()

let uploadDialog = ref(false)



onMounted(()=>{
    avatarUrl.value=JSON.parse(localStorage.getItem('token')).avatar
    handleAvatarUrl.value=JSON.parse(localStorage.getItem('token')).avatar
    username.value = JSON.parse(localStorage.getItem('token')).username
})

function chooseImage() {
    avatarRef.value.click()
}
function getImageInfo(event) {
    let file = event.target.files[0]
    let fileSize = (file.size / 1024).toFixed(2);
    if(fileSize > 1024) {
        ElMessage.warning('图片大小必须在1MB以内！')
        return false
    }
    let URL = window.URL || window.webkitURL
    handleAvatarUrl.value = URL.createObjectURL(file)
}
function uploadImage() {
  cropperRef.value.getCropData(data=>{
    const dataFile= dataURLtoFile(data)
    const formData = new FormData();
    formData.append('file', dataFile)
    formData.append('username', username.value)
    https.post('/auth/set_avatar',formData).then(res=>{
        if (res.data.code===200){
          ElMessage.success('添加成功')
          uploadDialog.value=false
          const token = JSON.parse(localStorage.getItem('token'))
          token['avatar'] = '/assets/images/' + username.value+'.png'
          localStorage.setItem('token', JSON.stringify(token))
          emit('clickChild','first')
        }
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
  })
}
function dataURLtoFile(dataUrl) {
  const arr = dataUrl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bst = window.atob(arr[1])
  let len = bst.length
  const u8arr = new Uint8Array(len)
  while (len--) {
      u8arr[len] = bst.charCodeAt(len)
  }
  return new File([u8arr], username.value+'.png', { type: mime })
}

</script>

<style scoped lang="scss">
.container {
    width: 520px;
    height: 400px;
    display: flex;
}
.left {
    width: 65%;
    height: 100%;
}

.big-image-preview {
    width: 100%;
    height: 85%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}

.tool {
    width: 100%;
    height: 15%;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<template>
  <el-card >
    <template #header>
      <span>个人中心</span>
    </template>
    <el-tabs v-model="activeName" >
      <el-tab-pane label="用户信息" name="first" class="info">
        <user-info/>
      </el-tab-pane>
      <el-tab-pane label="修改密码" name="second" class="info">
        <change-password/>
      </el-tab-pane>
      <el-tab-pane label="更改头像" name="third"  class="info">
        <avatar @clickChild="clickEven"/>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import { ref } from "vue"
import UserInfo from "../personal_center/components/userInfo.vue"
import ChangePassword from "../personal_center/components/changePassword.vue"
import Avatar from "../personal_center/components/avatar.vue"

const activeName = ref('first')

function clickEven(val) {
    activeName.value=val
}


</script>

<style scoped lang="scss">
.el-card{
  height: 100%;
  width: 80%;
  position: relative;
  left: 9.5%
}
:deep(.el-card__header) {
  background-color: #E6E6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

</style>
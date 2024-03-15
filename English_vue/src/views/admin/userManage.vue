<template>
  <el-row :gutter="75">
    <el-col :span="17" >
      <el-card>
        <template #header>
          <span>用户管理</span>
          <div>
            <el-button @click="openDialog('add')">添加用户</el-button>
            <el-button >导入用户</el-button>
          </div>
        </template>

        <el-table :data="userInfo" style="width: 100%;height: 100%" show-header @selection-change="handleSelectionChange" highlight-current-row>
          <el-table-column type="selection" width="40" />
          <el-table-column prop="user_id" label="用户ID" width="80"  align="center"  />
          <el-table-column prop="username" label="用户名" align="center"  />
          <el-table-column prop="email" label="电子邮箱" />
          <el-table-column prop="role" label="角色" width="80" :formatter="formatRole"/>
          <el-table-column align="center" label="用户确认">
            <template #default="scope">
              <el-switch
                  v-model="scope.row.confirm"
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                  active-value="2"
                  inactive-value="1"
                  @change="setConfirm(scope.row.user_id,scope.row.confirm)"/>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template #default="scope">
              <el-button style="width: 40%" type="primary" @click = "openDialog('edit',scope.row)" :icon="Edit">修改</el-button>
              <el-button style="width: 40%" type="danger" @click = "openDialog('delete',scope.row)" :icon="Delete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="7" >
      <el-card>
        <div class="role_select">
          <el-button type="primary" @click="getUserInfo('all')">全部</el-button>
          <el-button type="primary" @click="getUserInfo('teacher')">教师</el-button>
          <el-button type="primary" @click="getUserInfo('student')">学生</el-button>
          <el-button type="primary" @click="getUserInfo('admin')">管理员</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>

  <el-dialog v-model="dialog.visible" :title="dialog.title" width="30%">
    <div v-if="dialog.title==='用户删除'">
      <span>确认删除</span>
    </div>
    <div v-else>
      <el-form label-position="left">
        <el-form-item label="用户名" label-width="70px">
          <el-input v-model="username" placeholder="输入用户名" />
        </el-form-item>
        <el-form-item label="电子邮箱" label-width="70px">
          <el-input v-model="email" placeholder="输入电子邮箱" />
        </el-form-item>

        <el-form-item label="角色" label-width="70px">
          <el-select v-model="role" placeholder="选择用户角色" >
            <el-option
                    v-for="item in role_data"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="所教课程" label-width="70px" v-if="role==='teacher'">
          <el-select v-model="catalog" multiple  placeholder="选择所教课程" >
            <el-option
                v-for="item in catalogInfo"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="userSave()">确认</el-button>
        <el-button @click="dialog.visible = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue"
import https from "@/apis/axio"
import { ElMessage } from "element-plus"
import { Delete, Edit } from '@element-plus/icons-vue'

let user_id=ref()
let username=ref()
let email=ref()
let role=ref()
let catalog=ref()

const userInfo=ref()
const catalogInfo=ref()
const dialog=reactive({
    title:'',
    visible: false,
    path:''
})

const role_data = [
    {
        value:'admin',
        label:'管理员'
    },{
        value:'teacher',
        label:'教师'
    },{
        value:'student',
        label:'学生'
    }
]


onMounted(()=>{
  getCatalogInfo()
  getUserInfo('all')
})

function getCatalogInfo() {
  https.get('/english/get_catalog',).then(res=>{
    catalogInfo.value = res.data
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

function getUserInfo(role) {
    https.post('/admin/user_get',{'role':role}).then(res=>{
      userInfo.value = res.data
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}
function setConfirm(user_id,confirm) {
    https.post('/admin/user_confirm',{'user_id':user_id,'confirm':confirm}).then(res=>{
        if (res.data.code===200){
            ElMessage.success('修改成功')
            getUserInfo('all')
        }
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}
function openDialog(type,row) {
    dialog.visible=true
    if (type==='add'){
      dialog.title='用户添加'
      dialog.path='/admin/user_add'
      username.value=''
      email.value=''
      role.value=''
      catalog.value=''
    } else if (type==='edit'){
      dialog.title='用户修改'
      dialog.path='/admin/user_edit'
      userInfo.value.forEach(user=>{
        if (user.user_id === row.user_id){
          console.log(user)
          username.value=user.username
          email.value=user.email
          role.value=user.role
          user_id.value =user.user_id
          if (user.role==='teacher'){
            catalog.value = user.catalog
          }
        }
      })
    } else if (type==='delete'){
        dialog.title='用户删除'
        dialog.path='/admin/user_delete'
        user_id.value =row.user_id
    }
}
function userSave() {
    const formData = new FormData()
    formData.append('username', username.value)
    formData.append('email', email.value)
    formData.append('role', role.value)
    formData.append('user_id', user_id.value)
    formData.append('catalog', catalog.value)

    https.post(dialog.path,formData).then(res=>{
        if (res.data.code===200){
            ElMessage.success(res.data.message)
            getUserInfo('all')
            dialog.visible=false
        } else {
            ElMessage.error(res.data.message)
        }
    }).catch(()=>{
      ElMessage.error('未连接到服务器')
    })
}
function formatRole(row) {
    if (row.role==='admin'){
        return '管理员'
    } else if (row.role==='teacher'){
        return '教师'
    } else {
        return '学生'
    }
}
function handleSelectionChange(row) {
    console.log(row)
}
</script>

<style scoped lang="scss">
.el-row {
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
}
.el-card{
  height: 100%;
}
:deep(.el-card__header) {
  background-color: #E6E6FA;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.role_select{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-top: 15px;
}

</style>

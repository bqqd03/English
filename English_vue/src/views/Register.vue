<template>
  <el-card header="账号注册" class="register_box">
    <el-form
        :model="registerForm"
        :rules="rules"
        label-width="80px"
        size="small">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" placeholder="请输入用户名" autofocus />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" show-password />
      </el-form-item>

      <el-form-item label="确认密码" prop="check_password">
        <el-input type="password" v-model="registerForm.check_password" placeholder="请重新输入密码" show-password />
      </el-form-item>

      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="registerForm.email" placeholder="请重新输入邮箱"  />
      </el-form-item>

      <el-form-item label="角色" prop="role">
        <el-select v-model="registerForm.role" placeholder="请选择角色" filterable allow-create default-first-option style="width: 100%">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
        </el-select>
      </el-form-item>

<!--      <el-form-item label="所属课程" prop="class_type" v-if="registerForm.role==='teacher'">-->
<!--        <el-select v-model="registerForm.class_type" multiple placeholder="请选择所教课程" style="width: 100%">-->
<!--          <el-option-->
<!--              v-for="item in catalog_list"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value"/>-->
<!--        </el-select>-->
<!--      </el-form-item>-->

      <el-form-item>
        <el-button type="primary" @click="submitForm()">注册</el-button>
        <el-button native-type="reset">重置</el-button>
        <el-button @click=" router.push('/login')" style="position: absolute;right: 0">返回</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import https from "@/apis/axio"
import { useRouter } from 'vue-router'
import { ElMessage } from "element-plus";

let catalog_list = ref([])
const router = useRouter()
const options = [
    {
        value: 'teacher',
        label: '教师',
    },
    {
        value: 'student',
        label: '学生',
    }
]

const registerForm = reactive({
  username: '',
  password: '',
  check_password: '',
  email:'',
  role: '',
  // class_type:[]
});

let validatePassword2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};

const rules = {
  username: [
      { required: true, message: "用户名缺失", trigger: "blur" },
      { min: 3, max: 12, message: "长度在 3 到 12 个字符", trigger: "blur" },
  ],
  password: [
      { required: true, message: "请输入密码", trigger: "blur" },
      { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" },
  ],
  check_password: [{ required: true, validator: validatePassword2, trigger: 'blur' }],
  role: [
    { required: true, message: "请选择角色", trigger: "blur" },
  ],
  class_type: [
    { required: true, message: "请选择所属课程", trigger: "blur" },
  ]
};

onMounted(()=>{
  https.get('/english/essay_catalog').then(res=>{
    res.data.data.forEach(item=>{
      catalog_list.value.push({'value':item.label,'label':item.label})
    })
  })
})

function submitForm(){
  https.post('/auth/register', registerForm).then(res=>{
      if (res.data.code===200){
          ElMessage({
              message: '注册成功',
              type: 'success',
          })
          router.push('/login')
      } else {
          ElMessage({
              message: res.data.message,
              type: 'error',
          })
      }
  }).catch(()=>{
    ElMessage.error('未连接到服务器')
  })
}

</script>


<style scss>
.register_box{
    width: 400px;
    padding: 0 20px;
    position: absolute;
    left: 50%;
    top:30%;
    transform: translate(-50%,-50%);
}

</style>
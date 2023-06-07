<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img
          src="../assets/logo.png"
          alt=""
        />
      </div>
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        label-width="0px"
        class="login_form"
        ref="LoginFormRef"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            @keyup.enter="handleLogin"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button
            type="primary"
            round
            style="background-color: lightcoral; border: 1px solid #eee"
            @click="handleLogin"
          >登录</el-button>
          <el-button
            type="info"
            round
            style="background-color: #ddd; border: 1px solid #eee"
            @click="resetForm"
          >重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// 导入登录接口模块
// import { loginAPI } from '@/api/user'
import { validUsername,validPassword } from '@/utils/validate'
import { Message } from 'element-ui'    
export default {
  data () {

    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入正确的密码'))
      } else if (!validPassword(value)) {
        callback(new Error('密码不能少于8位且必须包含字母、数字、特殊字符'))
      } else {
        callback()
      }
    }
    return {
      // 表单数据对象
      loginForm: {
        username: 'qian00%',
        password: 'rIiWfl2kGL&NWLof'
      },
      // 表单数据验证规则
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.LoginFormRef.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              Message({
                message: '登录成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push({ path: this.redirect || '/' })
            })
            .catch((res) => {
              if (res.Code == 99) {
                Message({
                  message: res.Msg,
                  type: 'error',
                  duration: 5 * 1000
                })
              }
              console.log(res)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 添加表单重置方法
    resetForm () {
      this.$refs.LoginFormRef.resetFields()
    }
  }
}

</script>

  <style lang="less" scoped>
.login_container {
  // background-color: lightcoral;
  height: 100%;
  overflow: hidden;
  position: relative;
  height: 500px;
}
.login_box {
  width: 450px;
  height: 300px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 10px #ddd; //阴影
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px; //头像图片和头像盒子的距离
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .avatar_box img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
  background-color: #eee;
}
</style>

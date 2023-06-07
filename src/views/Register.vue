
<template>
  <div class="login">
    <div class="login-container">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <div class="title-container">
          <h3 class="title">注册</h3>
        </div>
        <el-form-item prop="username">
          <!-- <span class="svg-container">
            <svg-icon icon-class="user" />
          </span> -->
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <!-- <span class="svg-container">
            <svg-icon icon-class="password" />
          </span> -->
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
          <!-- <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span> -->
        </el-form-item>
        <el-form-item prop="checkPassword">
          <!-- <span class="svg-container">
            <svg-icon icon-class="password" />
          </span> -->
          <el-input
            :key="checkPasswordType"
            ref="checkPassword"
            v-model="loginForm.checkPassword"
            :type="checkPasswordType"
            placeholder="确认密码"
            name="checkPassword"
            tabindex="2"
            auto-complete="on"
          />
          <!-- <span class="show-pwd" @click="showCheckPwd">
            <svg-icon
              :icon-class="
                checkPasswordType === 'password' ? 'eye' : 'eye-open'
              "
            />
          </span> -->
        </el-form-item>
        <el-form-item prop="mobileNumber">
          <!-- <span class="svg-container">
            <svg-icon icon-class="phone" />
          </span> -->
          <el-input
            ref="mobileNumber"
            v-model="loginForm.mobileNumber"
            placeholder="手机号码"
            name="mobileNumber"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <el-form-item prop="email">
          <!-- <span class="svg-container">
            <svg-icon icon-class="email" />
          </span> -->
          <el-input
            ref="email"
            v-model="loginForm.email"
            placeholder="邮箱"
            name="email"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>
        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click="handleRegister"
          >注册</el-button
        >
        <!-- <div class="tips">
          <span style="margin-right: 20px">
            <router-link key="login" to="/login">登录</router-link>
          </span>
        </div> -->
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  validUsername,
  validPassword,
  validMobileNumber,
} from "@/utils/validate";
import { register } from "@/api/user";
import { Message } from 'element-ui'  
export default {
  name: "register",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入正确的密码"));
      } else if (!validPassword(value)) {
        callback(new Error("密码不能少于8位且必须包含字母、数字、特殊字符"));
      } else {
        callback();
      }
    };
    const validatePassword2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.loginForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    const validateMobileNumber = (rule, value, callback) => {
      if (!validMobileNumber(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        checkPassword: "",
        mobileNumber: "",
        email: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
        checkPassword: [
          { required: true, trigger: "blur", validator: validatePassword2 },
        ],
        mobileNumber: [
          { required: true, trigger: "blur", validator: validateMobileNumber },
        ],
        email: [
          { required: false, message: "请输入正确的邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
      },
      passwordType: "password",
      checkPasswordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    showCheckPwd() {
      if (this.checkPasswordType === "password") {
        this.checkPasswordType = "";
      } else {
        this.checkPasswordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.checkPassword.focus();
      });
    },
    handleRegister() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let formData = this.loginForm;
          //删除确认密码
          delete formData["checkPassword"];
          register(formData)
            .then((res) => {
              this.$message({
                message: "注册成功,前往登录",
                type: "success",
              }); 
              console.log(res)
              this.$router.push({ path: "/login" });
            })
            .catch((err) => {
              if (err.Code == 99) {
                Message({
                  message: err.msg,
                  type: 'error',
                  duration: 5 * 1000
                })
              }
              console.log(err);
              this.$refs.loginForm.resetFields();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login{
  // background: #2c3e50;
}
.login-container{
  width: 400px;
  margin: 0 auto;
  .title{
    // color: #fff;
    font-size: 30px;
    margin: 20px 0px;
  }
}
</style>

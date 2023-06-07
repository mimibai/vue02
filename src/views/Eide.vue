<template>
  <div class="dashboard-container">
    <!-- <div class="text">当前的用户名: {{username}}</div> -->
    <el-form>
      <el-form-item label="当前密码">
        <el-input v-model="PostForm.oldPwd" type="password" />
      </el-form-item>
      <el-form-item label="最新密码">
        <el-input v-model="PostForm.newPwd" type="password" />
      </el-form-item>
      <el-button type="primary" @click="EditBtn">修改密码</el-button>
    </el-form>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import { EditPwd } from '@/api/user'
// import { getToken, setToken } from '@/utils/auth'

export default {
  name: '',
  data() {
    return {
        username: '',
      PostForm: {}
    }
  },
  created() {
    // let User = JSON.parse(localStorage.getItem("User"));
    // this.User = User;
    // console.log(User);
  },
  methods: {
    async EditBtn() {
      const loading = this.$loading()
      const r = await EditPwd(this.PostForm)
      loading.close()
      if (r.Code === 1) {
        this.$message.success('修改密码成功!')
      } else this.$message.warning(r.Msg)
      console.log(r)
    }
  }
}
</script>

<style lang="less" scoped>
.dashboard-container {
    width: 400px;

    margin: 0 auto;
  .text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

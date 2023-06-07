<template>
  <div class="header">
    <div class="header_bottom">
        <el-col :span="5">
          <h1 class="Name fl">北京市朝阳区妇幼保健院欢迎您！</h1>
        </el-col>
        <el-col :span="7">
            <div class="search fr">
                <input
            type="text"
            placeholder="请输入您想搜索的内容..."
            name="search"
            id="search"
            class="searchtxt"
          >
            </div>
          
        </el-col>

    </div>

  </div>
</template>

<script>
// import Search from "./Search.vue";
// import LoginStatus from "./LoginStatus.vue";
// import NavBar from "./NavBar";
export default {
  data () {
    return {
      search: "",
    };
  },
  components: {
    // Search,
    // LoginStatus,
    // NavBar,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
/*------------------------头部---------------*/
/*
 颜色：#2076bd;
 宽度：1200px;
*/
/*顶部*/
body{
  padding: 0px;
  margin: 0px;
}
.header {
  background: #f2c132;
}
.header_bottom {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  h1 {
  font-size: 16px;
  color: #333;
}
}


/*搜索样式*/
.search {
  position: relative;
}

.search_box {
  margin-top: 35px;
}

.searchType_simulate {
  float: left;
  position: relative;
}

.searchType .searchChoose {
  height: 34px;
  line-height: 34px;
  text-align: center;
  width: 60px;
  float: left;
  cursor: pointer;
  border: 1px solid #6b7176;
  border-right: none;
  display: none;
}

.searchType .searchDownList {
  background: #fff;
  font-size: 12px;
  left: 0;
  position: absolute;
  text-align: center;
  top: 36px;
  width: 62px;
  z-index: 10000;
}

.search .searchtxt {
  height: 30px;
  padding-left: 18px;
  width: 290px;
  line-height: 30px;
  background: #ffe390;
  border-radius: 25px;
  border: none;
  box-sizing: border-box;
}

</style>


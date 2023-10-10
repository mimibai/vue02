<template>
<div id="ff">
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <Swiper />
  <router-link to="/eide">修改密码</router-link>
  <Childddd>
    <template v-slot:heading>
        <h1>element-ui组件</h1>
      </template>
      <!-- <template v-slot:sub-heading>
        <p>这里是element-ui的部分组件介绍</p>
      </template> -->
    
  </Childddd>
  
  <!-- <input type="text" v-model="msg">
  <span>{{ msg }}</span> -->
</div>
</template>
<script>
import Swiper from "../components/Swiper/index.vue";
import Childddd from "./home/layout/components/Childddd.vue"
export default {
  data(){
    
    return {
      msg:'欢迎大家！',
      
    };
    
  },
  components: {
    Swiper,
    Childddd
  }
  
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .wlle{
    font-size: 24px;
    margin: 10px 0px;
    
  }
</style>

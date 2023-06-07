<template>
  <el-carousel
    trigger="click"
    :indicator-position="indicatorPosition"
    :arrow="arrow"
    :height="height"
  >
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <img :src="item.imgUrl" :alt="item.alt" :title="item.title">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Banner',
  props: [
    'bannerList',
    'height',
    'arrow', // 是否显示左右箭头
    'indicatorPosition' // 是否显示分页
  ],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
</style>

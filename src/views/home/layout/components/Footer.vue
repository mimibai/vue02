<template>
  <div class="footer">
    这是footer
  </div>
</template>
<script>
// import FriendLink from './FriendLink.vue';
export default {
  data() {
    return {
      footerLogo:'',
      copyRight: "佰惠早筛集团　CopyRight ©2021 佰泽医疗投资集团有限公司",
      icp: "津ICP备20006368号",
    };
  },
  components:{
    // FriendLink
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.footer{
  background-color: #f2c132;
  padding: 15px 0px;
}
</style>


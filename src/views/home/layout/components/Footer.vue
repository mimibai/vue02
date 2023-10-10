<template>
  <div class="footer">
    <p>{{ copyRight }}</p>
    <slot name="text"></slot>
  </div>
  
</template>
<script>
// import FriendLink from './FriendLink.vue';
export default {
  data() {
    return {
      footerLogo:'',
      copyRight: "天创集团　CopyRight ©2023 天创投资集团有限公司",
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


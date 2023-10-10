<template>  
  <div>  
    <button @click="show = !show">Toggle</button>  
      
    <transition name="fade">  
      <p v-if="show">Hello, Vue.js!</p>  
    </transition>  
  </div>  
</template>  
<style>
/* styles.css */  
.fade-enter-active, .fade-leave-active {  
  transition: opacity .5s;  
}  
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {  
  opacity: 0;  
}
</style>
  
<script>  
export default {  
  data() {  
    return {  
      show: false  
    };  
  }  
};  
</script>
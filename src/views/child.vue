<template>  
    <div @click="handleClick">Click me</div>  
  </template>  
    
  <script>  
export default {  
    methods: {  
      handleClick() {  
        this.$emit('childEvent', 'Hello from Child')  
      }  
    }  
  }  
  </script>
<template>
    <div class="hello-world">
      <div class="text">Hello {{ text }}!
          <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    text : {
        type : String,
        default : 'Builder'
    }
  })
  </script>
  
  <style scoped>
  .hello-world {
    display: flex;
  }
  .text {
    padding: 50px;
    font-weight: 700;
    font-size: large;
  }
  </style>
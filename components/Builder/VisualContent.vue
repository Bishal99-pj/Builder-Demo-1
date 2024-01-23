<!-- builder/components/Hero.vue -->
<template>
    <div>
      Hello, {{ text }}!
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    text: string
  }>()
  
  defineBuilderComponent({
    friendlyName: 'Hero',
    description: 'Test description',
    inputs: [{
      name: 'text',
      type: 'string',
      defaultValue: 'world'
    }]
  })
  </script>
  
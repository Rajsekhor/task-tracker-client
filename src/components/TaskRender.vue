<template>
    <div>
      <div v-for="task in tasks" :key="task.id" class="completed-task">
        <div v-if="type==='completed' && task.status">
          {{ task.name }}
        </div>
        <div v-else-if="type==='not-completed' && !task.status">
          {{ task.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    computed: {
    },
  };
  </script>
  
  <style scoped>
  </style>
  
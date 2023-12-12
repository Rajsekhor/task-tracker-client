<!-- TaskRender.vue -->
<template>
    <div>
      <div v-for="task in filteredTasks" :key="task.id" class="completed-task">
        {{ task.name }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: {
        type: Array,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
    computed: {
      filteredTasks() {
        if (this.type === 'completed') {
          return this.task.filter(task => task.status === 'false');
        } else if (this.type === 'not-completed') {
          return this.task.filter(task => task.status === 'true');
        } else {
          // Handle other types or provide a default case
          return [];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  
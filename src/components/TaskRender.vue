<template>
  <div>
    <div v-for="task in tasks" :key="task.id" class="completed-task">
      <div
        style="padding: 20px; border: 1px solid black"
        @dblclick="UpdateTask(task._id)"
        v-if="type === 'completed' && task.status"
      >
        {{ task.name }}
      </div>
      <div
        style="padding: 20px; border: 1px solid black"
        @dblclick="UpdateTask(task._id)"
        v-else-if="type === 'not-completed' && !task.status"
      >
        {{ task.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  computed: {},
  methods: {
    ...mapActions(["updateTasks"]),
    UpdateTask(taskId) {
      let token = localStorage.getItem("user");
      this.updateTasks({taskId, token});
    },
  },
};
</script>

<style scoped>
.completed-task {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5; /* Light gray on hover */
  }
}

</style>

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

<style scoped></style>

<template>
  <div>
    <h3>Task Tracker</h3>
    <AddTask />
    <div id="tasks">
      <h4>Task Yet to be completed</h4>
      <TaskRender :tasks="completedTask" type="not-completed" />
      <h4>Task completed</h4>
      <TaskRender :tasks="completedTask" type="completed" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaskRender from './TaskRender.vue';
import AddTask from './AddTask.vue';

export default {
  name: 'TaskTracker',
  computed: {
    ...mapGetters(['allTasks']),
    completedTask() {
      return this.allTasks;
    },
  },
  methods:{
    ...mapActions(['fetchTasks'])
  },
  mounted(){
    this.fetchTasks()
  },
  components: {
    TaskRender,
    AddTask
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="task-tracker-container">
    <h3>Task Tracker</h3>
    <AddTask v-if="isAuthenticated" />
    <div id="tasks" v-if="isAuthenticated">
      <h4>Task Yet to be completed</h4>
      <TaskRender :tasks="completedTask" type="not-completed" />
      <h4>Task completed</h4>
      <TaskRender :tasks="completedTask" type="completed" />
    </div>
    <div v-else>
      <p class="not-logged-in-message">You are not logged in</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TaskRender from '../components/TaskRender.vue';
import AddTask from '../components/AddTask.vue';
import VueJwtDecode from "vue-jwt-decode";

export default {

  name: 'TaskTracker',
  computed: {
    ...mapGetters(['allTasks']),
    ...mapGetters('auth', ['isAuthenticated']),
    completedTask() {
      return this.allTasks;
    },
  },
  methods: {
  ...mapActions('auth', ['login']),
  ...mapActions(['fetchTasks']),
},

mounted() {
  this.login();
  let token = localStorage.getItem("user");
  if (token != null) {
    try {
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
      this.fetchTasks(token);
    } catch (error) {
      console.log(error, 'error from decoding token');
    }
  }
},
  components: {
    TaskRender,
    AddTask
  },
};
</script>

<style scoped>

.task-tracker-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  /* border: 1px solid #ddd; */
  border-radius: 5px;
  
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
}

h3 {
  color: #333;
}

#tasks {
  margin-top: 20px;
}

h4 {
  color: #555;
  margin-bottom: 10px;
}

/* Style for the "You are not logged in" message */
.not-logged-in-message {
  color: #ff6347; /* Tomato color */
  font-size: 18px;
  margin-top: 20px;
}


</style>

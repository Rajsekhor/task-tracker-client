<template>
  <div id="main-container">
    <TaskTracker />
  </div>
</template>

<script>
import TaskTracker from './components/TaskTracker.vue';

export default {
  name: 'App',
  components: {
    TaskTracker
  }
}
</script>

<style>
  body{
    margin:0;
    padding:0;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  #main-container{
    height: auto;
    width:100%;
    display: flex;
  }
</style>

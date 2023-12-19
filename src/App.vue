<template>
  <div>
  <MainNavbar />
    <router-view />
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue';

export default {
  components: { MainNavbar },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: #a9b57e; /* Fallback color */
  background-image: url('~@/assets/main-background.jpg'); /* Use the correct path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>

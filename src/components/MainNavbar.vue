<template>
  <nav class="main-navbar">
    <router-link to="/">Home</router-link>
    <div>
      <router-link v-if="!isAuthenticated" to="/signin">Sign In</router-link>
      <router-link v-if="!isAuthenticated" to="/signup">Sign Up</router-link>
      <router-link @click="handleLogout" v-if="isAuthenticated" to="/signin">Logout</router-link>
    </div>
  </nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
export default {
  name: "MainNavbar",
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleLogout(){
      this.logout();
    }
    
  },
};
</script>

<style scoped>
nav.main-navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3498db; /* Primary color for the background */
  padding: 10px;
  color: #fff; /* Text color */
}

nav.main-navbar a {
  text-decoration: none;
  color: #fff; /* Text color for links */
  margin-right: 15px;
}

nav.main-navbar a:hover {
  text-decoration: underline; /* Underline on hover for links */
  color: #f5f5f5; /* Lighter color on hover */
}

nav.main-navbar div {
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <nav class="main-navbar">
    <router-link to="/">Task Tracker</router-link>
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
  height: auto;
  width: calc(100%-50px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff; /* Primary color for the background */
  color: #545e2a; /* Text color */
}

nav.main-navbar a {
  font-weight: bold;
  padding: 25px;
  text-decoration: none;
  color: #545e2a; /* Text color for links */
  transition: all 0.3s ease-in-out;
}

nav.main-navbar a:hover {
  color: #f5f5f5;
  background-color: #8DA242;
;
}

nav.main-navbar div {
  display: flex;
  flex-direction: row;
}
</style>

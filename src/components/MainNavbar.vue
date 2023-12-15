<template>
  <nav>
    <router-link to="/">Home</router-link>
    <div>
      <router-link v-if="!isAuthenticated" to="/signin">SignIn</router-link>
      <router-link v-if="!isAuthenticated" to="/signup">SignUp</router-link>
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
nav {
  width: 100dvw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>

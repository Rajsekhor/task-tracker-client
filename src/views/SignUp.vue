<template>
  <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
  <div class="signup-container">
    <h3>Sign Up</h3>
    <form @submit.prevent="submit">
      <div class="input-holder">
        <i class="fas fa-user"></i>
        <input
          v-model="data.name"
          type="text"
          placeholder="Username"
          required
        />
      </div>
      <div class="input-holder">
        <i class="fas fa-envelope"></i>
        <input v-model="data.email" type="email" placeholder="Email" required />
      </div>
      <div class="input-holder">
        <i class="fas fa-lock"></i>
        <input
          v-model="data.password"
          type="password"
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
// import { mapActions } from 'vuex';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  // methods:{
  //   ...mapActions('auth',['login'])
  // },
  setup() {
    const store = useStore();
    const data = reactive({
      name: "",
      email: "",
      password: "",
    });

    const router = useRouter();
    const status = computed(() => store.getters["auth/isAuthenticated"]);

    const submit = async () => {
      const response = await fetch("http://65.2.81.108:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      const token = responseData.token;
      // await storeToken(token);
      localStorage.setItem("user", token);
      store.dispatch("auth/login");
      if (status.value) {
        router.push("/");
      } else {
        router.push("/signin");
      }
    };

    return {
      data,
      submit,
    };
  },
};
</script>

<style scoped>

.signup-container {
  max-width: 400px;
  margin: 15dvh auto 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
}

h3 {
  color: #2c3e50;
}

form {
  display: flex;
  flex-direction: column;
}

.input-holder{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin: auto;
  border-bottom: 1px solid #2c3e50;
}

.input-holder:last-of-type{
  margin-bottom: 25px;
}
input {
  /* margin-bottom: 10px; */
  margin: 7.5px;
  padding: 8px;
  border-radius: 3px;
  font-size: 14px;
  outline: none;
  border: none;
  width: 300px;
  background: transparent;
}

button {
  background-color: #A7BC5B;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  width: 60%;
  margin: auto;
  transition: all 0.3s ease-in-out;
}

button:hover {
  background-color: #8DA242;
}
</style>

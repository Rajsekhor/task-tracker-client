<template>
  <div class="signup-container">
    <h3>Sign Up</h3>
    <form @submit.prevent="submit">
      <input v-model="data.name" type="text" placeholder="username" required />
      <input v-model="data.email" type="email" placeholder="email" required />
      <input
        v-model="data.password"
        type="password"
        placeholder="password"
        required
      />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive,computed } from "vue";
// import { mapActions } from 'vuex';
import { useStore } from 'vuex'
import { useRouter } from "vue-router";

export default {
  name: "SignUp",
  // methods:{
  //   ...mapActions('auth',['login'])
  // },
  setup() {
    const store=useStore();
    const data = reactive({
      name: "",
      email: "",
      password: "",
    });

    const router=useRouter();
    const status = computed(() => store.getters["auth/isAuthenticated"]);

    const submit = async () => {
      const response = await fetch("http://65.2.81.108:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:'include',
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      const token = responseData.token;
      // await storeToken(token);
      localStorage.setItem("user", token);
      store.dispatch('auth/login');
      if(status.value){
        router.push('/')
      }else{
        router.push('/signin')
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
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 14px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #2980b9;
}
</style>

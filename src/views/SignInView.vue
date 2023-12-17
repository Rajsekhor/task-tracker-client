<template>
  <div class="signin-container">
    <h3>Sign In</h3>
    <form @submit.prevent="submit">
      <input v-model="data.email" type="email" placeholder="email" />
      <input v-model="data.password" type="password" placeholder="password" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { reactive,computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "SignIn",
  setup() {
    const store=useStore();
    const data = reactive({
      email: "",
      password: "",
    });
    const router = useRouter();
    const status = computed(() => store.getters["auth/isAuthenticated"]);

    const submit = async () => {
      const response = await fetch("http://65.2.81.108:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials:'include',
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      const token = responseData.token;
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

.signin-container {
  max-width: 400px;
  margin: 15dvh auto 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
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

<template>
  <div>
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
      const response = await fetch("https://www.nesjs-todolist.vercel.app/auth/login", {
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

<style scoped></style>

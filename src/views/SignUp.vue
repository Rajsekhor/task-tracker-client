<template>
  <div>
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
      const response = await fetch("http://54.237.232.251:3000/auth/signup", {
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


<style scoped></style>

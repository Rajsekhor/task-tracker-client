<template>
    <div id="input-container">
      <h4>Add a Task</h4>
      <form @submit.prevent="onSubmit" class="add-task-form">
        <input type="text" v-model="name" placeholder="Add a task here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name:'AddTask',
        data(){
            return{
                name:''
            }
        },  
        methods:{
            ...mapActions(['addTasks']),
            onSubmit(e){
                let token = localStorage.getItem("user");
                e.preventDefault();
                this.addTasks({name:this.name,token})
                this.name=''
            }
        }
    }
</script>

<style scoped>

#input-container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.add-task-form {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.add-task-form input {
  padding: 8px;
  margin-bottom: 10px;
  font-size: 1rem;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #A7BC5B;
}

.add-task-form button {
  background-color: #A7BC5B;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
}

.add-task-form button:hover {
  background-color: #8DA242;
}
</style>

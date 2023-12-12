<template>
    <div>
        <h4>Add a Task</h4>
        <form @submit="onSubmit">
            <input type="text" v-model='name' placeholder="Add a task here" />
            <input type="submit" value="Submit" />
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
                e.preventDefault();
                this.addTasks(this.name)
            }
        }
    }
</script>

<style scoped>

</style>

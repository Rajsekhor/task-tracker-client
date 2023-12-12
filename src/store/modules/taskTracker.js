import axios from "axios";

const state = {
  tasks: [],
};

const actions = {
  async fetchTasks({commit}) {
    const response = await axios.get(
      'http://localhost:3000/todo'
    );
    let res=response.data.tasks
      commit('setTasks',res)
  },
  async addTasks({commit},name) {
    const response = await axios.post(
      'http://localhost:3000/todo',{
        name
      }
    );
    let res=response.data
      commit('newTasks',res)
  },
};

const getters = {
  allTasks: (state) => state.tasks,
};

const mutations = {
  setTasks:(state,tasks)=>(state.tasks=tasks),
  newTasks:(state,task)=>state.tasks.unshift(task)
};

export default {
  state,
  actions,
  getters,
  mutations,
};

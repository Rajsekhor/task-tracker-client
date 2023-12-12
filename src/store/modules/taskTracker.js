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
};

const getters = {
  allTasks: (state) => state.tasks,
};

const mutations = {
  setTasks:(state,tasks)=>(state.tasks=tasks)
};

export default {
  state,
  actions,
  getters,
  mutations,
};

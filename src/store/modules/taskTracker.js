import axios from "axios";

const state = {
  tasks: [
    {
      id: 1,
      name: "Sleep",
      status: "true",
    },
    {
      id: 2,
      name: "Code",
      status: "false",
    },
  ],
};

const actions = {
  async fetchTasks({commit}) {
    const response = await axios.get(
      
    );
      commit('setTasks',response)
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

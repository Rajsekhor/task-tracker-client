import { createStore } from 'vuex'
import TaskTracker from './modules/taskTracker'

// Create a new store instance.
const store = createStore({
  modules:{
    TaskTracker
  }
})
export default store;
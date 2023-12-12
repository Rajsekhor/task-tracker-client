import {createApp} from 'vue';
import App from './App.vue';
import store from './store';  // Make sure this path is correct

createApp(App).use(store).mount('#app')
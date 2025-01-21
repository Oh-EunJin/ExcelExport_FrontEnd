import { createApp } from 'vue';
import App from './App.vue';
import axios from "axios";

//부트스트랩
// import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import scriptJs from '@/assets/js/scripts.js';

const app = createApp(App);

app.config.globalProperties.$axios = axios;      // axios 전역 설정

// app.use(BootstrapVue3);
app.use(scriptJs);
app.mount('#app');

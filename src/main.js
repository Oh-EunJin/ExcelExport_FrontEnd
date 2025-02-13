import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
// import axios from './plugins/axios'
import store from './store';

// 부트스트랩
// import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import scriptJs from '@/assets/js/scripts.js';

// 공통으로 사용하는 컴포넌트 전역 컴포넌트로 선언
import AlertComponent from './common/AlertComponent.vue';
import LoadingComponent from './common/LoadingComponent.vue';

const app = createApp(App);

app.config.globalProperties.$axios = axios;      // axios 전역 설정

// axios 통신 시 응답값이 오기까지 loading바 노출
axios.interceptors.request.use(function (config) {
    store.commit('loadingComponent', true);

    return config;
});
axios.interceptors.response.use(function (config) {
    store.commit('loadingComponent', false);

    return config;
});

// app.use(BootstrapVue3);
app.component('AlertComponent', AlertComponent);
app.component('LoadingComponent', LoadingComponent);
app.use(scriptJs);
app.use(store);
app.mount('#app');

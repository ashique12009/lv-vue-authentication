import 'bootstrap/dist/css/bootstrap.css';
import './assets/main.css';
import 'bootstrap';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';
import './axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);

const pinia = createPinia();

pinia.use(({store}) => {
    store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.mount('#app');
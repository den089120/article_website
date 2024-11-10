import './styles/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import ClassNames from "@/shared/lib/plagins/classNames";

const app = createApp(App);

app.use(createPinia());
app.use(ClassNames);
app.use(router);

app.mount('#app');

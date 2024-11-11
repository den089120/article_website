import './app/styles/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { i18n } from "@/shared/lib/i18n";
import App from './App.vue';
import router from './router';
import ClassNames from "@/shared/lib/plagins/classNames";

const app = createApp(App);
app.use(i18n);
app.use(createPinia());
app.use(ClassNames);
app.use(router);

app.mount('#app');

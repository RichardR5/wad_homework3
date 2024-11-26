import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import MainPage from './views/MainPage.vue';
import SignupPage from './views/SignupPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/signup', component: SignupPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');

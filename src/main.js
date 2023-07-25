import './assets/main.css'
import VueFeather from 'vue-feather';

import { createApp } from 'vue'

import App from './App.vue'
const app =  createApp(App)
app.component(VueFeather.name, VueFeather);

app.mount('#app')

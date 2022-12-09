import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '@fortawesome/fontawesome-free/css/all.css'
import VueApexCharts from "vue3-apexcharts"
import axios from 'axios'
import VueAxios from 'vue-axios'
import { initializeApp } from "firebase/app";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDISfT_jx0hkD-SDgy5Z8tlPVT79dNEdXg",
  authDomain: "vue-http-learning-b7e81.firebaseapp.com",
  databaseURL: "https://vue-http-learning-b7e81-default-rtdb.firebaseio.com",
  projectId: "vue-http-learning-b7e81",
  storageBucket: "vue-http-learning-b7e81.appspot.com",
  messagingSenderId: "512051751261",
  appId: "1:512051751261:web:5ae2d5b116bbeed2efe0b4"
};

const app = createApp(App);

// // Initialize Firebase
initializeApp(firebaseConfig);

app.component('Datepicker', Datepicker);
app.use(VueApexCharts);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)



createApp(App).use(store).use(router).mount('#app')

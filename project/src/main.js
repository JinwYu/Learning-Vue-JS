import Vue from 'vue';
import App from './App.vue';

// Custom components.
import Navbar from './Navbar.vue';

// Import Bootstrap 4.
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(BootstrapVue)

// Register custom components.
Vue.component("app-navbar", Navbar);

new Vue({
  el: '#app',
  render: h => h(App)
})

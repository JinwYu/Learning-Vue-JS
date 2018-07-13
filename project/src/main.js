import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './App.vue';

// Import Bootstrap.
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

// Custom components.
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Headline from './Headline.vue';
import Article from './Article.vue';

// Register custom components.
Vue.component("app-navbar", Navbar);
Vue.component("app-footer", Footer);
Vue.component("app-headline", Headline);
Vue.component("app-article", Article);

new Vue({
  el: '#app',
  render: h => h(App)
})

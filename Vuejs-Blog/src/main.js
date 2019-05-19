import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import Jumbotron from './Jumbotron.vue'
// Vue.component('jumbotron', Jumbotron)
//
import Navbar from './components/Navbar.vue'
Vue.component('navbar', Navbar)
//
// import Card from './Card.vue'
// Vue.component('card', Card)

//create a new Vue and link to a second page
//Link to a backend
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

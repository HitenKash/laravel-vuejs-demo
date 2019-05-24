/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

import App from './App.vue';
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import CluesComponent from './components/CluesComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'categories',
      path: '/categories',
      component: IndexComponent
  },
  {
      name: 'clues',
      path: '/clues/:id/:count',
      component: CluesComponent
  }
];

import Paginate from 'vuejs-paginate'

Vue.component('paginate', Paginate);
const router = new VueRouter({ mode: 'history', routes: routes});
const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');

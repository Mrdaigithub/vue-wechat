import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './components/App.vue'

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  hashbang: false
});

router.map({
  '/home': {
    component: require('./components/Main/Sigin.vue')
  },
  '/sigin': {
    component: require('./components/Main/Sigin.vue')
  },
  '/msg': {
    component: require('./components/Main/Sigin.vue')
  },
  '/rank': {
    component: require('./components/Main/Sigin.vue')
  },
  '/time': {
    component: require('./components/Main/Sigin.vue')
  },
  '/gift': {
    component: require('./components/Main/Sigin.vue')
  },
  '/vote': {
    component: require('./components/Main/Sigin.vue')
  },
  '/game': {
    component: require('./components/Main/Sigin.vue')
  },
  '/setbg': {
    component: require('./components/Main/Sigin.vue')
  }
});
router.redirect({
  '*': '/home'
});

router.start(App, '#app');

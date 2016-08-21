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
    component: require('./components/main/Sigin.vue')
  },
  '/sigin': {
    component: require('./components/main/Sigin.vue')
  },
  '/msg': {
    component: require('./components/main/Message.vue')
  },
  '/rank': {
    component: require('./components/main/Sigin.vue')
  },
  '/time': {
    component: require('./components/main/Time.vue')
  },
  '/gift': {
    component: require('./components/main/Sigin.vue')
  },
  '/vote': {
    component: require('./components/main/Sigin.vue')
  },
  '/game': {
    component: require('./components/main/Sigin.vue')
  }
});
router.redirect({
  '*': '/home'
});

router.start(App, '#app');

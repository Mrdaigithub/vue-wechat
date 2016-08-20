import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  users:[]
};

const mutations = {
  ADD_USER(state,user){
    state.users.push(user);
  }
};

export default new Vuex.Store({
  state,
  mutations
})

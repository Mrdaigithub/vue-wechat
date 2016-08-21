import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  users:[],
  messages:[]
};

const mutations = {
  ADD_USER(state,user){
    state.users.push(user);
  },
  ADD_MESSAGE(state,message){
    state.messages.push(message);
  }
};

export default new Vuex.Store({
  state,
  mutations
})

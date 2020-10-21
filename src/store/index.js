import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client: false
  },
  mutations: {
    UPDATE_CLIENT (state, payload) {
      state.client = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

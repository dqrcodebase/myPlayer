import Vue from 'vue'
import Vuex from 'vuex'

Vue.prototype.bus = new Vue()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerClass: true
  },
  mutations: {
    clucencyHeader(state, Boole) {
      state.headerClass = Boole
    },
    opacitasHeader(state) {
      state.headerClass = true
    }
  },
  actions: {},
  modules: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.prototype.bus = new Vue()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
})

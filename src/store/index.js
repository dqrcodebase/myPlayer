import Vue from 'vue'
import Vuex from 'vuex'

Vue.prototype.bus = new Vue()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerColor: false,
    headerShow: true
  },
  mutations: {
    clucencyHeader(state, obj) {
      console.log(obj);
      state.headerColor = obj.colorBoole
      state.headerShow = obj.showBoole
    },
    opacitasHeader(state) {
      state.headerColor = true
    }
  },
  actions: {},
  modules: {}
})

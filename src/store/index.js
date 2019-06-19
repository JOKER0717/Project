import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showpos: false,
    tops: 0,
  },
  mutations: {
    showposf(state, pramas) {
      state.showpos = pramas
    },
    tops(state, pramas) {
      state.tops = pramas
    }
  },
  actions: {

  }
})

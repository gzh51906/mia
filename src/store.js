import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorization:''
  },
  mutations: {
     login(state,authorization){
          localStorage.setItem('Authorization',authorization)
          state.authorization = authorization
     }
  },
  actions: {

  }
})

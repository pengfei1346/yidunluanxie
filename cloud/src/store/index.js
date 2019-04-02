import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    info: {
      avatar: "",
      desc: "",
      email: "",
      nickname: "",
      username: ""
    }
  },
  mutations,
  plugins: [createPersistedState()]
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    resources: [
      {
        title: "A great title!",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel accumsan metus. Nam mollis pretium. "
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

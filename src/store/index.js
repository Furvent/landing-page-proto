import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    resource:
      {
        title: "A great title!",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel accumsan metus. Nam mollis pretium. ",
        contacts: [
          {
            name: "Jean Peups",
            email: "jean.peups@cool.it",
            organisation: "PeupsLab"
          }
        ]
      }
  },
  getters: {
    getTitle: function(state) {
      return state.resource.title
    },
    getDescription: function(state) {
      return state.resource.description
    },
    getContacts: function(state) {
      return state.resource.contacts
    }
  },
  mutations: {
    changeTitle(state, payload) {
      state.resource.title = payload.newTitle
    },
    changeDescription(state, payload) {
      state.resource.description = payload.newDescription
    },
    pushContact(state, payload) {
      state.resource.contacts.push(payload.newConctact)
    }
  }
})

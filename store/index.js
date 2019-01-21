import Vue from "vue"
import Vuex from "vuex"
import Cookies from "js-cookie"
import axios from "axios"

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      ifHomePage: false,
      countCart: null,
      id: undefined,
      favorite: null
    },
    actions: {
      set_homepage(context, payload) {
        context.commit("set_homepage", payload)
      }
    },
    mutations: {
      set_countCart(state) {
        axios
          .get("http://5.23.53.82/api/basket/?get=" + state.id)
          .then(response => {
            state.countCart = response.data.AllCount
          })
      },
      get_idUser(state) {
        state.id = Cookies.get("id")
      },
      set_idUser(state, payload) {
        Cookies.set("id", payload)
        state.id = Cookies.get("id")
      }
    }
  })

export default store

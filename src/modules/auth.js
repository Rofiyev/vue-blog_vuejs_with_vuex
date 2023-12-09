export default {
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    registerBtn({ commit }) {
      setTimeout(() => {
        commit('setLoading')
      }, 2000)
    }
  }
}

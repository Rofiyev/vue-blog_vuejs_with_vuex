export default {
  state: {
    isLoading: false
  },
  mutations: {
    setLoading(state) {
      state.isLoading = !state.isLoading
    }
  }
}

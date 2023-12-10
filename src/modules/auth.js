import AuthServices from '../service/auth'

export default {
  state: {
    isLoading: false,
    user: null,
    errors: null
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    },
    registerSuccess(state, payload) {
      state.user = payload
    },
    registerFailure(state, payload) {
      state.errors = payload.errors
    }
  },
  actions: {
    async register(context, user) {
      context.commit('setIsLoading')
      try {
        const { data } = await AuthServices.register(user)
        context.commit('registerSuccess', data)
        return data
      } catch (error) {
        context.commit('registerFailure', error.response.data)
        return error.response.data
      } finally {
        context.commit('setIsLoading')
      }
    }
  }
}

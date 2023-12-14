import { setItem } from '../helpers/persistaneStorage'
import AuthServices from '../service/auth'
import { AuthUserTypes } from './types'

export default {
  state: {
    isLoading: false,
    user: null
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    },
    registerSuccess(state, payload) {
      state.user = payload
    }
  },

  actions: {
    async register(context, user) {
      context.commit('setIsLoading')
      try {
        const { data } = await AuthServices.register(user)
        context.commit('registerSuccess', data.user)
        setItem('token', data.user.token)
        return { data, msg: 'Register Successfully!' }
      } catch (error) {
        let str = ''
        Object.entries(error.response.data.errors).forEach(([, value]) => (str += value))
        return { data: null, msg: str }
      } finally {
        context.commit('setIsLoading')
      }
    },
    async login(context, user) {
      context.commit('setIsLoading')
      try {
        const { data } = await AuthServices.login(user)
        context.commit('registerSuccess', data.user)
        setItem('token', data.user.token)
        return { data, msg: 'Login Successfully!' }
      } catch (error) {
        // let str = ''
        console.log(error.data)
        return { data: null, msg: 'Error' }
      } finally {
        context.commit('setIsLoading')
      }
    }
  },
  getters: {
    [AuthUserTypes.user]: (state) => state.user
  }
}

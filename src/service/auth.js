import axios from './axios'

const AuthServices = {
  async register(user) {
    return await axios.post('/users', { user })
  },
  async login(user) {
    return await axios.post('/users/login', { user })
  },
  getUser() {
    return axios.get('/user')
  }
}

export default AuthServices

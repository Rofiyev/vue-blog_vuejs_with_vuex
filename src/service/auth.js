import axios from './axios'

const AuthServices = {
  async register(user) {
    await axios.post('/users', { user })
  }
}

export default AuthServices

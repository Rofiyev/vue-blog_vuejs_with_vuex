import ArticleService from '../service/articles'

export default {
  state: {
    isLoading: false,
    data: null
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    },
    getArticles(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async getArticles(context) {
      context.commit('setIsLoading')
      try {
        const { data } = await ArticleService.getAllArticles()
        context.commit('getArticles', data.articles)
      } catch (e) {
        console.log(e)
      } finally {
        context.commit('setIsLoading')
      }
    }
  }
}

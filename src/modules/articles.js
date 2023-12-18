import ArticleService from '../service/articles'

export default {
  state: {
    isLoading: false,
    data: null,
    articleDetail: null
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    },
    getArticles(state, payload) {
      state.data = payload
    },
    getArticleDetail(state, payload) {
      state.articleDetail = payload
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
    },
    async getArticleDetail(context, slug) {
      context.commit('setIsLoading')
      try {
        const { data } = await ArticleService.getArticleDetails(slug)
        context.commit('getArticleDetail', data.article)
        return { data: data.article, success: true }
      } catch (e) {
        console.log(e)
        return { data: null, success: false }
      } finally {
        context.commit('setIsLoading')
      }
    }
  }
}

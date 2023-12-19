import ArticleService from '../service/articles'

export default {
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state) {
      state.isLoading = !state.isLoading
    }
  },
  actions: {
    async postArticle(context, article) {
      try {
        context.commit('setIsLoading')
        const { data } = await ArticleService.createdArticle(article)
        return { data: data.article, success: true, msg: 'Created Article Successfully!' }
      } catch (error) {
        return { data: [], success: false, msg: error.response.data }
      } finally {
        context.commit('setIsLoading')
      }
    },
    async deleteArticle(context, slug) {
      try {
        context.commit('setIsLoading')
        await ArticleService.removeArticle(slug)
        return { success: true, msg: 'Deleted Article Successfully!' }
      } catch (error) {
        return { success: false, msg: error.response.data }
      } finally {
        context.commit('setIsLoading')
      }
    },
    async updateArticle(context, { slug, article }) {
      try {
        context.commit('setIsLoading')
        const { data } = await ArticleService.updateArticle(slug, article)
        return { data: data.article, success: true, msg: 'Updated Article Successfully!' }
      } catch (error) {
        return { data: [], success: false, msg: error.response.data }
      } finally {
        context.commit('setIsLoading')
      }
    }
  }
}

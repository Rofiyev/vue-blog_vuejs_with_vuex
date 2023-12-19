import axios from './axios'

const ArticleService = {
  getAllArticles() {
    return axios.get('/articles')
  },
  getArticleDetails(slug) {
    return axios.get(`/articles/${slug}`)
  },
  createdArticle(article) {
    return axios.post('/articles', { article })
  },
  removeArticle(slug) {
    return axios.delete(`/articles/${slug}`)
  }
}

export default ArticleService

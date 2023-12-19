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
  },
  updateArticle(slug, article) {
    return axios.put(`/articles/${slug}`, { article })
  }
}

export default ArticleService

import axios from './axios'

const ArticleService = {
  getAllArticles() {
    return axios.get('/articles')
  },
  getArticleDetails(slug) {
    return axios.get(`/articles/${slug}`)
  }
}

export default ArticleService

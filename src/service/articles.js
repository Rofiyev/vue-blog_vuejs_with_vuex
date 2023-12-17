import axios from './axios'

const ArticleService = {
  getAllArticles() {
    return axios.get('/articles')
  }
}

export default ArticleService

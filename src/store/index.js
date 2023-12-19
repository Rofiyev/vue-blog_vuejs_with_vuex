import { createStore } from 'vuex'
import auth from '@/modules/auth'
import articles from '@/modules/articles'
import changedArticle from '@/modules/changed-article'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, articles, changedArticle }
})

export default store

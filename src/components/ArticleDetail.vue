<template>
  <div
    v-if="isLoading"
    style="min-height: 80vh"
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <LoaderComponent />
  </div>
  <div class="row py-2" v-else-if="!isLoading && article">
    <div class="col-md-8 blog-main">
      <div class="blog-post">
        <h2 class="blog-post-title">{{ article.title }}</h2>
        <p class="blog-post-meta">{{ new Date(article.createdAt).toDateString() }} by</p>
        <p>
          {{ article.description }}
        </p>
        <hr />
        <div v-html="handleNewLine(article.body)" />
      </div>
    </div>

    <aside class="col-md-4 blog-sidebar">
      <div class="p-3 mb-3 bg-light rounded">
        <div class="d-flex align-items-center gap-1">
          <img
            style="width: 40px; height: 40px; border-radius: 50%"
            :src="article.author.image"
            :alt="article.author.username"
          />
          <h4 class="font-italic mb-0">{{ article.author.username }}</h4>
        </div>
        <p class="mb-0">
          {{ article.author.bio }}
        </p>
      </div>

      <div class="p-3">
        <h4 class="font-italic">Tags</h4>
        <ol class="list-unstyled mb-0">
          <li v-for="item in article.tagList" :key="item">
            <a href="#">{{ item.charAt(0).toUpperCase() + item.slice(1) }}</a>
          </li>
        </ol>
      </div>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { LoaderComponent } from '@/components'

export default {
  components: { LoaderComponent },
  computed: {
    ...mapState({
      article: (state) => state.articles.articleDetail,
      isLoading: (state) => state.articles.isLoading
    })
  },
  methods: {
    handleNewLine(str) {
      return str.replace(/(\\r)*\\n/g, '<br />')
    }
  }
}
</script>

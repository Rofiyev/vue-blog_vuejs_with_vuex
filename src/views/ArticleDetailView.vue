<template>
  <main role="main" class="container">
    <ArticleDetail />
  </main>
</template>

<script>
import { ArticleDetail } from '@/components'

export default {
  name: 'ArticleDetailView',
  components: { ArticleDetail },
  mounted() {
    this.$store.dispatch('getArticleDetail', this.$route.params.slug)
  }
}
</script>

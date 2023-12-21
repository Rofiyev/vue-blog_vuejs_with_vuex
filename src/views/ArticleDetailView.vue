<template>
  <main role="main" class="container">
    <ArticleDetailComponent />
  </main>
</template>

<script>
import { ArticleDetailComponent } from '@/components'

export default {
  name: 'ArticleDetailView',
  components: { ArticleDetailComponent },
  mounted() {
    this.$store.dispatch('getArticleDetail', this.$route.params.slug)
  }
}
</script>

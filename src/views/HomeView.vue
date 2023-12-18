<template>
  <div
    v-if="isLoading"
    style="min-height: 80vh"
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <LoaderComponent />
  </div>
  <div v-else class="row">
    <CardComponent v-for="article in data" :key="article.id" :article="article" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { CardComponent, LoaderComponent } from '@/components'

export default {
  name: 'HomeView',
  components: { CardComponent, LoaderComponent },
  computed: {
    ...mapState({
      data: ({ articles: { data } }) => data,
      isLoading: ({ articles: { isLoading } }) => isLoading
    })
  },
  mounted() {
    this.$store.dispatch('getArticles')
  }
}
</script>

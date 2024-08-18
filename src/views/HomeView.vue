<template>
  <div
    v-if="isLoading"
    style="min-height: 80vh"
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <LoaderComponent />
  </div>
  <template v-else>
    <span class="d-flex justify-content-end mb-3">
      <RouterLink
        :to="{ name: 'create-article' }"
        class="text-decoration-none btn btn-outline-dark"
      >
        Create Article</RouterLink
      >
    </span>
    <div class="row">
      <CardComponent v-for="article in data" :key="article.id" :article="article" />
    </div>
  </template>
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
  }
}
</script>

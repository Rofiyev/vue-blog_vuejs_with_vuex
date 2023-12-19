<template>
  <div
    v-if="loading"
    style="min-height: 80vh"
    class="w-100 d-flex justify-content-center align-items-center"
  >
    <LoaderComponent />
  </div>
  <div v-else>
    <h3 class="text-center">Edit Article</h3>
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <form @submit.prevent>
          <InputUI type="text" placeholder="Title" v-model="title" />
          <TextAreaUI placeholder="Description" rows="3" class="mt-3" v-model="description" />
          <TextAreaUI placeholder="Body" rows="5" class="mt-3" v-model="body" />
          <ButtonUI v-if="!isLoading" @click="editArticleHandler" type="submit" class="mt-3 w-100"
            >Changed</ButtonUI
          >
          <ButtonUI v-else class="mt-3 w-100" type="submit" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Submitting...
          </ButtonUI>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LoaderComponent from './LoaderComponent.vue'
import { toast } from 'vue3-toastify'

export default {
  name: 'EditArticleComponent',
  components: { LoaderComponent },
  data() {
    return {
      title: '',
      description: '',
      body: '',
      loading: true
    }
  },
  computed: {
    ...mapState({
      isLoading: ({ articles: { isLoading } }) => isLoading,
      articleDetail: ({ articles: { articleDetail } }) => articleDetail
    })
  },
  methods: {
    async editArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: []
      }
      const { data, msg, success } = await this.$store.dispatch('updateArticle', {
        slug: this.$route.params.slug,
        article
      })
      success ? toast.success(msg) : toast.error(msg)
      if (success && data) setTimeout(() => this.$router.push({ name: 'home' }), 1000)
    }
  },
  async mounted() {
    const { data, success } = await this.$store.dispatch(
      'getArticleDetail',
      this.$route.params.slug
    )
    if (success) {
      this.loading = false
      this.title = data.title
      this.description = data.description
      this.body = data.body
    }
  }
}
</script>

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
        <FormComponent
          :initialValues="initialValues"
          :buttonText="'Change Saved'"
          :handleSubmit="editArticleHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { FormComponent } from '@/components'
import { toast } from 'vue3-toastify'
import { mapState } from 'vuex'
import { LoaderComponent } from '../components'

export default {
  name: 'EditArticleView',
  components: { FormComponent, LoaderComponent },
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
      isLoading: ({ articles: { isLoading } }) => isLoading
    }),
    initialValues() {
      return {
        title: this.title,
        description: this.description,
        body: this.body
      }
    }
  },
  methods: {
    async editArticleHandler(article) {
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

<template>
  <h3 class="text-center">Create Article</h3>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <FormComponent
        :initialValues="initialValues"
        :buttonText="'Created'"
        :handleSubmit="createArticleHandler"
      />
    </div>
  </div>
</template>

<script>
import { FormComponent } from '../components'
import { toast } from 'vue3-toastify'
import { mapState } from 'vuex'

export default {
  name: 'CreateArticleView',
  components: { FormComponent },
  data() {
    return {
      title: '',
      description: '',
      body: ''
    }
  },
  computed: {
    ...mapState({
      isLoading: ({ changedArticle: { isLoading } }) => isLoading
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
    async createArticleHandler(article) {
      const { data, msg, success } = await this.$store.dispatch('postArticle', article)
      success ? toast.success(msg) : toast.error(msg)
      if (data && success) setTimeout(() => this.$router.push({ name: 'home' }), 1000)
    }
  }
}
</script>

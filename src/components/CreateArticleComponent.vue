<template>
  <h3 class="text-center">Create Article</h3>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <form @submit.prevent>
        <InputUI type="text" placeholder="Title" v-model="title" />
        <TextAreaUI placeholder="Description" rows="3" class="mt-3" v-model="description" />
        <TextAreaUI placeholder="Body" rows="5" class="mt-3" v-model="body" />
        <ButtonUI v-if="!isLoading" @click="createArticleHandler" type="submit" class="mt-3 w-100"
          >Created</ButtonUI
        >
        <ButtonUI v-else class="mt-3 w-100" type="submit" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Submitting...
        </ButtonUI>
      </form>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
import { mapState } from 'vuex'

export default {
  name: 'CreateArticleComponent',
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
    })
  },
  methods: {
    async createArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: []
      }
      const { data, msg, success } = await this.$store.dispatch('postArticle', article)
      success ? toast.success(msg) : toast.error(msg)
      if (data && success) setTimeout(() => this.$router.push({ name: 'home' }), 1000)
    }
  }
}
</script>

<style></style>

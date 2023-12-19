<template>
  <h3 class="text-center">Create Article</h3>
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6">
      <form @submit.prevent>
        <InputUI type="text" placeholder="Title" v-model="title" />
        <TextAreaUI placeholder="Description" rows="3" class="mt-3" v-model="description" />
        <TextAreaUI placeholder="Body" rows="5" class="mt-3" v-model="body" />
        <ButtonUI @click="createArticleHandler" type="submit" class="mt-3 w-100">Created</ButtonUI>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateArticleComponent',
  data() {
    return {
      title: '',
      description: '',
      body: ''
    }
  },
  methods: {
    createArticleHandler() {
      const newArticle = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: []
      }
      console.log(newArticle)
    }
  }
}
</script>

<style></style>

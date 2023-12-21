<template>
  <form @submit.prevent>
    <InputUI type="text" placeholder="Title" v-model="title" />
    <TextAreaUI placeholder="Description" rows="3" class="mt-3" v-model="description" />
    <TextAreaUI placeholder="Body" rows="5" class="mt-3" v-model="body" />
    <ButtonUI v-if="!isLoading" @click="handleSubmitForm" type="submit" class="mt-3 w-100">{{
      buttonText
    }}</ButtonUI>
    <ButtonUI v-else class="mt-3 w-100" type="submit" disabled>
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Submitting...
    </ButtonUI>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FormComponent',
  props: {
    buttonText: {
      type: String,
      required: true
    },
    handleSubmit: {
      type: Function,
      required: true
    },
    initialValues: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body
    }
  },
  computed: {
    ...mapState({
      isLoading: ({ articles: { isLoading } }) => isLoading
    })
  },
  methods: {
    handleSubmitForm() {
      const article = {
        title: this.title,
        body: this.body,
        description: this.description,
        tagList: []
      }
      this.handleSubmit(article)
    }
  }
}
</script>

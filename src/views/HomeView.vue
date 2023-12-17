<template>
  <h1>{{ data }}</h1>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      data: ({ articles: { data } }) => data,
      isLoading: ({ articles: { isLoading } }) => isLoading
    })
  }
}
</script>

<style scoped></style>

<template>
  <h1>Home</h1>
  <div class="d-flex align-items-center gap-3">
    <button class="btn btn-primary" @click="$store.commit('increment')">+</button>
    <span>{{ counter }}</span>
    <button class="btn btn-primary" @click="$store.commit('decrement')">-</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    counter() {
      return this.$store.state.count
    }
  }
}
</script>

<style scoped></style>

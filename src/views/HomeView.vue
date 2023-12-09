<template>
  <h1>Home</h1>
  <div class="d-flex align-items-center gap-3">
    <button class="btn btn-primary" @click="$store.commit('increment')">+</button>
    <span>{{ $store.state.count }}</span>
    <button class="btn btn-primary" @click="$store.commit('decrement')">-</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped></style>

<template>
  <div class="container">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { NavbarComponent } from '@/components'

export default {
  components: { NavbarComponent },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

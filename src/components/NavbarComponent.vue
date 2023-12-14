<template>
  <div class="d-flex flex-row align-items-center justify-content-between py-3 mb-4 border-bottom">
    <RouterLink :to="{ name: 'home' }" class="text-dark text-decoration-none">
      <h4 class="my-0 mr-md-auto fw-bold">R.D.7</h4></RouterLink
    >
    <nav class="d-inline-flex ms-md-auto">
      <template v-if="!user">
        <RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none"
          >Login</RouterLink
        >
        <RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none"
          >Register</RouterLink
        >
      </template>
      <template v-else>
        <div class="d-flex gap-2">
          <img class="rounded-circle" height="50" width="50" :src="user.image" alt="user" />

          <div>
            <h5 class="mb-0">{{ user.username }}</h5>
            <span>{{ user.email }}</span>
          </div>
        </div>
      </template>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { AuthUserTypes } from '@/modules/types'
export default {
  computed: {
    ...mapState({
      // user: (state) => state.auth.user
    }),
    ...mapGetters({
      user: [AuthUserTypes.user]
    })
  }
}
</script>

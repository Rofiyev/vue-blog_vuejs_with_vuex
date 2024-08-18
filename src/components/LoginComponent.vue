<template>
  <div class="w-50 m-auto mt-5">
    <form @submit.prevent="handleSubmit">
      <div class="d-flex justify-content-center">
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt="Logo"
          width="72"
          height="72"
        />
      </div>
      <h1 class="h3 mb-3 font-weight-normal text-center">Login</h1>
      <div class="d-flex flex-column mx-auto gap-2" style="width: 70%">
        <InputUI placeholder="Email" type="email" v-model="email" />
        <InputUI placeholder="Password" type="password" v-model="password" />

        <ButtonUI v-if="!isLoading" class="mt-3" type="submit">Login</ButtonUI>
        <ButtonUI v-else class="mt-3" type="submit" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Submitting...
        </ButtonUI>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">© 2023-2024</p>
    </form>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    async handleSubmit() {
      const user = {
        email: this.email,
        password: this.password
      }
      const { data, msg } = await this.$store.dispatch('login', user)
      if (data) {
        toast.success(msg)
        this.$router.push({ name: 'home' })
      } else toast.error(msg)
    }
  }
}
</script>

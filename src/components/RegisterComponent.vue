<template>
  <div class="w-50 m-auto mt-5">
    <form>
      <div class="d-flex justify-content-center">
        <img
          class="mb-4"
          src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
      </div>
      <h1 class="h3 mb-3 font-weight-normal text-center">Register</h1>
      <div class="d-flex flex-column mx-auto gap-2" style="width: 70%">
        <input
          type="text"
          id="username"
          class="form-control"
          placeholder="Username"
          required
          autofocus=""
        />
        <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus=""
        />
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        />
        <button class="btn btn-primary btn-block mt-3" type="submit">Sign in</button>
      </div>
      <p class="mt-5 mb-3 text-muted text-center">© 2023-2024</p>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>
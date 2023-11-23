<template>
  <div class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom">
    <RouterLink :to="{ name: 'home' }" class="text-dark text-decoration-none">
      <h4 class="my-0 mr-md-auto fw-bold">R.D.7</h4></RouterLink
    >

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <RouterLink :to="{ name: 'login' }" class="me-3 py-2 text-dark text-decoration-none"
        >Login</RouterLink
      >
      <RouterLink :to="{ name: 'register' }" class="me-3 py-2 text-dark text-decoration-none"
        >Register</RouterLink
      >
    </nav>
  </div>
</template>

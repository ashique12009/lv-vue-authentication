<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">Laravel Vue Authentication</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><RouterLink to="/home" class="nav-link active" aria-current="page">Home</RouterLink></li>
            <li class="nav-item"><RouterLink to="/registration" class="nav-link" aria-current="page">Registration</RouterLink></li>
            <li class="nav-item"><RouterLink to="/login" class="nav-link" aria-current="page">Login</RouterLink></li>
            <li class="nav-item"><a class="nav-link" href="#">Logout</a></li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script setup>

</script>

<style scoped>

</style>
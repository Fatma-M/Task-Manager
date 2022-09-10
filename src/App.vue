<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 p-3">
    <div class="m-auto d-flex">
      <router-link to="/tasks" class="fw-bold fs-3 text-decoration-none">
        Tasks
      </router-link>
      <router-link to="/add" class="fw-bold fs-3 text-decoration-none">
        Add
      </router-link>
    </div>
  </nav>

  <router-view />
</template>

<script></script>

<style>
a {
  display: inline-block;
  margin-right: 15px;
}

nav a.router-link-exact-active {
  color: indigo;
  text-decoration: underline !important;
}
</style>

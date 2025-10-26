<template>
  <nav class="navbar">
    <router-link to="/">Kezdőlap</router-link>
    <span class="divider">|</span>
    <router-link to="/beers">Sörök</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  background: #24292e;
  padding: 0.75rem;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.navbar .divider {
  margin: 0 1rem;
  color: #bbb;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin-right: 1rem;
}
.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>

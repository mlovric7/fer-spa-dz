<template>
  <header>
    <div class="header-content">
      <div class="logo-and-title">
        <img src="@/assets/logo.png" alt="Logo" class="logo">
        <h4>TaskMaster</h4>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Početna</router-link></li>
          <li><router-link to="/about">O aplikaciji</router-link></li>
          <li><router-link to="/tasks">Tasks</router-link></li>
          <li><router-link to="/stats">Stats</router-link></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<!---->
<style scoped>
header {
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
}

.logo-and-title {
  display: flex;
  align-items: center;
}

.logo {
  height: 30px;
  margin-right: 1rem;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav li {
  margin-left: 20px;
}

nav a {
  text-decoration: none;
  color: #007bff;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/postList">PostList</router-link> |
  </nav>
  <router-view />
</template>

<script>
export default { name: "App" };
</script>

<style>
body {
  font-family: "Segoe UI", Tahoma, sans-serif;
  margin: 0;
  background: #f4f7fa;
}
.app {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
</style>

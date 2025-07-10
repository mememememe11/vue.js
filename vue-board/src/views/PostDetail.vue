<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <router-link to="/postList" class="btn">목록으로</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters.getPostById(this.id);
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1.1rem;
  line-height: 1.6;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  background: #42b983;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
}
</style>

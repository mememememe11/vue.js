<template>
  <div>
    <h2>게시글 목록</h2>
    <router-link to="/new" class="btn">게시글 작성</router-link>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="`/post/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.getters.allPosts;
    },
  },
};
</script>

<style scoped>
/* 전체 감싸는 영역을 센터 정렬 */
div {
  max-width: 800px;
  margin: 60px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}

/* 제목 크고 굵게 */
h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2c3e50;
}

/* 작성 버튼 */
.btn {
  display: inline-block;
  background: #42b983;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 30px;
  transition: background 0.3s;
}
.btn:hover {
  background: #369c72;
}

/* 게시글 목록 */
.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.post-list li {
  background: #f9f9f9;
  margin-bottom: 15px;
  padding: 16px;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;
  border: 1px solid #ddd;
}
.post-list li:hover {
  background: #f1f1f1;
  transform: translateY(-2px);
}

/* 링크 스타일 */
.post-list a {
  text-decoration: none;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>

<template>
  <div class="form-container">
    <h2>게시글 작성</h2>
    <form @submit.prevent="submitPost">
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <button type="submit" class="btn">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    submitPost() {
      this.$store.dispatch("addPost", {
        title: this.title,
        content: this.content,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* 외부 박스 */
.form-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* 제목 */
h2 {
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

/* input, textarea */
input,
textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

/* 버튼 */
.btn {
  background-color: #42b983;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #369870;
}
</style>

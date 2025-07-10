<template>
  <h3>Vuex 사용하기</h3>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    console.log(this.$store.getters.todoList);
  },
};
</script>

<style scoped>
div {
  border: 1px solid yellow;
}
</style>

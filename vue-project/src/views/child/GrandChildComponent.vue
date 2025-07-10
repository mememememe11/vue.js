<template>
  <h3>GrandChildComponent.vue (최하위 - injector)</h3>
  <p>
    주입받은이름: <strong>{{ provideUsername }}</strong>
  </p>
  <button @click="updateParentName">부모사용이름 변경</button>
</template>

<script>
export default {
  inject: ["provideUsername", "updateUserName"],
  methods: {
    updateParentName() {
      this.updateUserName("김길동");
    },
  },
};
</script>

<style scoped>
.grand-child {
  border: 1px solid green;
}
</style>

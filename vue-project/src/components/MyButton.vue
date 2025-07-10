<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button v-on:click="handleClick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: { type: String, default: "클릭하세요" },
  }, // 숙지하기
  methods: {
    handleClick() {
      // $emit을 사용
      //console.log(this);
      console.log(this);
      this.$emit("my-event", this.label + "을 전달");
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  color: white;
  border: 20px;
  border-radius: 5px;
  cursor: auto;
}
</style>

<template>
  <h3>Watch</h3>
  <textarea v-bind:disabled="charFull" v-model="messageContent"></textarea>
  <p class="char-count">현재: {{ charCount }} 자 / 최대 50자</p>
  <p>{{ feedMessage }}</p>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      messageContent: "",
      charCount: 0,
      charFull: false,
      feedMessage: "메시지를 입력하세요",
    };
  },
  watch: {
    messageContent(nv, ov) {
      //nv = 바뀌기전에값 ov = 바뀐후 값 ?? 불확실
      console.log(nv + "," + ov);
      this.charCount = nv.length;
      // 50자 => charFull: true, feedMessage: '제한 50자 입니다'
      if (nv.length >= 50) {
        this.charFull = true;
        this.feedMessage = "제한 50자 입니다";
      }
    },
  },
};
</script>

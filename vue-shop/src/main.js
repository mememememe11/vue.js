import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App)
  .mixin(mixins) // 공동함수;
  .use(router)
  .mount("#app");

window.KaKao.init("aec18e8f5829257d0568d150759ad765");

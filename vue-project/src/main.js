import { createApp } from "vue";
import App from "./App.vue"; // 가장최상위폴더 Root 컴포넌트
import router from "./router"; // 라우팅 정보
//0710
import store from "./store/index.js"; // 저장소

// createApp(App).use(router).use(router).use(router).mount("#app");

const app = createApp(App);
app.use(router);
app.mount("#app");

//0710
app.use(store);

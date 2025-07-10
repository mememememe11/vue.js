import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/PostDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/postList",
    name: "postList",
    component: () =>
      import(/* webpackChunkName: "postList" */ "../views/PostList.vue"),
  },
  {
    path: "/new",
    name: "postForm",
    component: () =>
      import(/* webpackChunkName: "postForm" */ "../views/PostForm.vue"),
  },
  {
    path: "/post/:id",
    name: "postDetail",
    component: () =>
      import(/* webpackChunkName: "postDetail" */ "../views/PostDetail.vue"),
    props: true, // URL 파라미터를 props로 전달
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

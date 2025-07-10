import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      posts: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setPosts(state, payload) {
      state.posts = payload;
    },
    ADD_POST(state, post) {
      state.posts.push(post); // 새 게시글 추가
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const dummyPosts = [
        { id: 1, title: "게시글 1" },
        { id: 2, title: "게시글 2" },
      ];
      commit("setPosts", dummyPosts);
    },
    addPost({ commit }, post) {
      // post = { title, content }
      commit("ADD_POST", post);
    },
  },
  getters: {
    postCount(state) {
      return state.posts.length;
    },
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
    allPosts(state) {
      return state.posts;
    },
  },
});

export default store;

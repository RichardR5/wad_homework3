import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    likePost(state, postId) {
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('/posts.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Map the fields from posts.json to match the store's expectations
        const postsWithLikes = data.map(post => ({
          id: post.postId, // Map postId to id
          createTime: post.createTime,
          userId: post.userId,
          image: post.body.image,
          caption: post.body.caption,
          likes: 0 // Initialize likes to 0
        }));
        commit('setPosts', postsWithLikes);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    likePost({ commit }, postId) {
      commit('likePost', postId);
    },
    resetLikes({ commit }) {
      commit('resetLikes');
    }
  },
  getters: {
    allPosts: state => state.posts
  }
});

<template>
  <div>
    <HeaderComponent />
    <main>
      <h1>Posts</h1>
      <button @click="resetAllLikes" class="reset-button">Reset All Likes</button>
      
      <div class="posts-container">
        <PostComponent
          v-for="post in posts"
          :key="post.id"
          :post="post"
          class="post"
        />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import PostComponent from "@/components/PostComponent.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    PostComponent,
  },
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      return this.allPosts;
    }
  },
  methods: {
    resetAllLikes() {
      this.$store.dispatch('resetLikes');
    }
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  }
};
</script>

<style scoped>
main {
  padding-left: clamp(0px, 10%, 200px);
  padding-right: clamp(0px, 10%, 200px);
}

.reset-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}

.reset-button:hover {
  background-color: #d32f2f;
}

h1 {
  margin-bottom: 10px;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.post {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

section {
  background-color: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>

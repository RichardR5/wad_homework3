<template>
    <section class="post">
      <h3>{{ post.caption }}</h3>
      <div v-if="post.image" class="image-container">
        <img :src="post.image" :alt="post.caption" />
      </div>
      <p>{{ post.caption }}</p>
      <div class="like-section">
        <button @click="likePost" class="like-button">Like</button>
        <span>{{ post.likes }} {{ post.likes === 1 ? 'Like' : 'Likes' }}</span>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      likePost() {
        //when the button is clicked, dispatches the likePost action to the Vuex store, passing the id of the post
        this.$store.dispatch('likePost', this.post.id);
      }
    }
  };
  </script>
  
  <style scoped>
  .post {
    border: 1px solid #ccc;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  }
  
  .post h3 {
    margin-bottom: 8px;
  }
  
  .image-container {
    margin-bottom: 10px;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
  
  .like-section {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  .like-button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .like-button:hover {
    background-color: #369870;
  }
  </style>
  
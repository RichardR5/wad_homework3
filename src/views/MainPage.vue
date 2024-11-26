<template>
    <div>
      <HeaderComponent />
      <main>
        Posts
      </main>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
    },
  };
  </script>
  
  <style scoped>
  main {
    padding: 20px;
  }
  section {
    background-color: #f9f9f9;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
  }
  </style>
  
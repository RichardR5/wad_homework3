<template>
    <div>
      <HeaderComponent />
      <main>
        <SignupForm />
      </main>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from "@/components/HeaderComponent.vue";
  import FooterComponent from "@/components/FooterComponent.vue";
  import SignupForm from "@/components/SignupForm.vue";
  
  export default {
    components: {
      HeaderComponent,
      FooterComponent,
      SignupForm,
    },
  };
  </script>
  
  <style scoped>
  main {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  </style>
  
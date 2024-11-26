<template>
    <div v-if="errors.length > 0" class="error-messages">
      <p>The password is not valid:</p>
      <ul>
        <li v-for="(message, index) in errors" :key="index">{{ message }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ValidationErrors",
    props: {
      errors: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .error-messages {
    background-color: #f8d7da;
    color: #842029;
    padding: 10px;
    border-radius: 10px;
    max-width: 250px;
    font-size: 12px;
  }
  
  .error-messages p {
    margin: 0px;
    font-weight: bold;
    font-size: 14px;
  }
  
  .error-messages ul {
    margin-top: 10px;
    margin-bottom: 0px;
    padding-left: 15px;
  }
  
  .error-messages li {
    line-height: 1.4;
  }
  </style>
  
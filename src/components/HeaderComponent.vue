<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "HeaderComponent",
  };
  </script>
  
  <style scoped>
  header {
    background-color: #f4f4f4;
    padding: 10px;
  }
  nav ul {
    list-style-type: none;
    display: flex;
    gap: 20px;
  }
  nav ul li {
    display: inline;
  }
  </style>
  
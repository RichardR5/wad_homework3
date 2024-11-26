<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/signup" class="nav-link">Signup</router-link></li>
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
    background-color: lightgray;
    border-radius: 10px;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 10px;
    margin: 0px;
  }
  
  .nav-link {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
  
  .nav-link:hover {
    color: whitesmoke;
  }
  </style>
  
<template>
    <div class="signup-form">
      <form>
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
        
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignupForm",
  };
  </script>
  
  <style scoped>
  .signup-form {
    padding: 20px;
    background-color: #e8f0fe;
    border-radius: 5px;
    max-width: 300px;
    margin: 20px auto;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  
<template>
    <footer>
      <p>This page was made by group E</p>
      <p>Content on this site is licensed under absolutely nothing</p>
      <p>You will not get any contact info</p>
      <p>There are no terms of use, go wild</p>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent",
  };
  </script>
  
  <style scoped>
footer {
  background-color: lightgray;
  text-align: center;
  padding: 10px;
  left: 0;
  bottom: 10px;
  width: calc(100% - 20px);
  margin: 0 10px; 
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
}

  </style>
  
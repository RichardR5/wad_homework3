<template>
  <div class="signup-form">
    <form>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <div class="button-container">
        <button type="submit">Signup</button>
      </div>
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
  background-color: rgb(214, 236, 214);
  border-radius: 10px;
  max-width: 300px;
  margin: 20px auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 20px;
}


label {
  flex-basis: 50%;
  text-align: right;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: 0px;
}

.button-container {
  display: flex;
  justify-content: center;
}

button {
  background-color: rgb(117, 165, 194);
  color: black;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 120px;
}

button:hover {
  background-color: #45a049;
}
</style>

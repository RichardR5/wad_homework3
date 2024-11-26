<template>
  <div class="signup-form">
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="email"
          placeholder="Email" 
          required 
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Password" 
          @input="onPasswordInput"
          required 
        />
      </div>
      <!-- Show notification box only when the user is typing and has entered at least one character to password field-->
      <ValidationErrors 
        v-if="isPasswordTyping && password.length > 0 && passwordErrors.length > 0" 
        :errors="passwordErrors" 
      />
      <div class="button-container">
        <button type="submit">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import { validatePassword } from "@/utils/passwordValidator";
import ValidationErrors from "./ValidationErrors";

export default {
  name: "SignupForm",
  components: {
    ValidationErrors,
  },
  data() {
    return {
      email: "", // Not used but added it regardless
      password: "",
      isPasswordTyping: false, // Tracks whether the user is actively typing
    };
  },
  computed: {
    passwordErrors() {
      return validatePassword(this.password);
    },
    isPasswordValid() {
      return this.passwordErrors.length === 0;
    },
  },
  methods: {
    onPasswordInput() {
      // Set typing flag when user types into the password field
      this.isPasswordTyping = true;
    },
    handleSubmit() {
      
      if (!this.isPasswordValid) {
        alert("Signup error - Password does not meet requirements.");
        return;
      }

      alert("Signup completed successfully! Rerouting to the home page.");
      this.$router.push('/');
    },
  },
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

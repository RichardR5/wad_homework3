export function validatePassword(password) {
    const errors = [];
    
    if (password.length < 8 || password.length > 14) {
      errors.push("Password must be 8-14 characters long.");
    }
    if (!/[A-Z]/.test(password[0])) {
      errors.push("Password must start with an uppercase letter.");
    }
    if ((password.match(/[a-z]/g) || []).length < 2) {
      errors.push("Password must include at least two lowercase letters.");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must include at least one numeric value.");
    }
    if (!/_/.test(password)) {
      errors.push('Password must include the character "_".');
    }
    
    return errors;
  }
  
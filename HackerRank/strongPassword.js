// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong

  if (n < 6) return 6 - n;
  else if (!/[a-z]/.test(password)) {
    return 1;
  } else if (!/[A-Z]/.test(password)) {
    return 1;
  } else if (!/[0-9]/.test(password)) {
    return 1;
  }
  if (!/[!@#$%^&*()-+]/.test(password)) {
    return 1;
  }
}

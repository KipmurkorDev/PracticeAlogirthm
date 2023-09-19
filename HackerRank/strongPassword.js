// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least .
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+

function minimumNumber(n, password) {
  let count = 0;

  if (!/[a-z]/.test(password)) {
    count++;
  }

  if (!/[A-Z]/.test(password)) {
    count++;
  }

  if (!/[0-9]/.test(password)) {
    count++;
  }

  if (!/[!@#$%^&*()-+]/.test(password)) {
    count++;
  }

  if (n < 6) {
    let total = n + count;
    if (total < 6) {
      count += 6 - total;
    }
  }

  return count;
}

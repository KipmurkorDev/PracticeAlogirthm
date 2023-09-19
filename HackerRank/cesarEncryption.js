// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
  let encryptedText = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/[A-Z]/.test(char)) {
      const shift = "A".charCodeAt(0);
      const encryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) - shift + k) % 26) + shift
      );
      encryptedText += encryptedChar;
    } else if (/[a-z]/.test(char)) {
      const shift = "a".charCodeAt(0);
      const encryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) - shift + k) % 26) + shift
      );
      encryptedText += encryptedChar;
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}

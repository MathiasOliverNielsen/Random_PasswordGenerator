// Random password generator
function generatePassword(length, includeUppercase, includeNumbers, includeSymbols, includeLowercase) {
  // Character sets for different types
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+[]{}|;:,.<>?';

  let allowedChars = '';
  let password = '';

  // Build the allowed character set based on user options
  allowedChars += includeLowercase ? lowercaseChars : '';
  allowedChars += includeUppercase ? uppercaseChars : '';
  allowedChars += includeNumbers ? numberChars : '';
  allowedChars += includeSymbols ? symbolChars : '';

  // Validate input: length and at least one character type
  if (length <= 0) {
    return 'Password length must be at least 1 character.';
  }
  if (allowedChars.length === 0) {
    return 'At least one character type must be selected.';
  }

  // Generate password by picking random characters from allowed set
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password || 'Password generation failed.';
}

// Password options
const passwordLength = 12;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const includeLowercase = true;

// Generate and print the password
const password = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols, includeLowercase);

console.log(`Generated password: ${password}`);

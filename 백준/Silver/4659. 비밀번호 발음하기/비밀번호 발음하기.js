let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();

function isValidPassword(password) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  const hasVowel = vowels.some(vowel => password.includes(vowel));
  if (!hasVowel) return false;

  const isVowel = char => vowels.includes(char);
  let vowelCount = 0, consonantCount = 0;
  for (const char of password) {
    if (isVowel(char)) {
      vowelCount++;
      consonantCount = 0;
    } else {
      consonantCount++;
      vowelCount = 0;
    }
    if (vowelCount === 3 || consonantCount === 3) {
      return false
    }
  }

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1] && password[i] !== 'e' && password[i] !== 'o') {
      return false;
    }
  }

  return true;
}

input.forEach(password => {
  console.log(`<${password}> is ${isValidPassword(password) ? 'acceptable' : 'not acceptable'}.`);
});
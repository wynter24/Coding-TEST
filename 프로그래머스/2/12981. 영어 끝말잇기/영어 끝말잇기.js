function solution(n, words) {
  let usedWords = new Set();
  let lastWord = words[0];
  usedWords.add(lastWord);

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
    if(usedWords.has(currentWord) || lastWord[lastWord.length -1] !== currentWord[0]) {
      let player = i % n + 1;
      let turn = Math.floor(i / n) + 1;
      return [player, turn];
    }
    usedWords.add(currentWord);
    lastWord = currentWord;
  }

  return [0,0];
}
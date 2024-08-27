function solution(word) {
  let vowels = ["A", "E", "I", "O", "U"];
  let multiplier = 781; // 5^4 + 5^3 + 5^2 + 5^1 + 5^0 = 781
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const idx = vowels.indexOf(word[i]);
    result += idx * multiplier + 1; // +1: 현재 위치의 단어
    // 다음 자리로 넘어가면 가능한 경우의 수는 이전 자리에서의 경우의 수를 5로 나눈 값
    multiplier = (multiplier - 1) / 5;
  }

  return result;
}
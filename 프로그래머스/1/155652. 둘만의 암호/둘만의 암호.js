function solution(s, skip, index) {
  let startCode = 'a'.charCodeAt(0); // 97 
  let endCode = 'z'.charCodeAt(0); // 122 

  // skip을 제외한 문자배열
  let allowedChars = [];
  for (let i = startCode; i <= endCode; i++) {
    let char = String.fromCharCode(i);
    if(!skip.includes(char)) allowedChars.push(char);
  }

  // 문자배열에서 s+index 구하기
  let answer = ''
  for (const el of s) {
    const currentIndex = allowedChars.indexOf(el);
    const newIndex = (currentIndex + index) % allowedChars.length;
    answer += allowedChars[newIndex];
  }

  return answer;
}
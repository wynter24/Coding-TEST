// Write a function called findLongestSubstring, 
// which accepts a string and returns the length of the longest substring 
// with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// 문자열에 포함 X
// end++ 문자열 추가
// 포함O
// 해당 문자 제거


// ⭐ 슬라이딩 윈도우 + 해시맵 O(1)
function findLongestSubstring(str) {
  let seen = {};
  let start = 0;
  let maxLen = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char] >= start) {
      start = seen[char] + 1;
    }
    seen[char] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

// 내가 푼 문제 (only sliding window -> 예외 케이스 존재: 'tmmzuxt')
// function findLongestSubstring(str) {
//   const arr = str.split('');
//   let start = 0, end = 0;
//   let maxLen = 0;
//   let tempLen = 0;
//   let substring = [];

//   while (end < arr.length) {
//     if (substring.includes(str[end])) {
//       substring.shift();
//       start++;
//       tempLen--;
//     } else {
//       substring.push(str[end++]);
//       tempLen++;
//       maxLen = Math.max(tempLen, maxLen);
//     }
//   }

//   return maxLen;
// }

// 내 풀이 개선 O(n) -> 맞긴 한데 조금 비효율적!
function findLongestSubstring(str) {
  let curIdx = 0;
  let maxLen = 0;
  let subarray = [];

  while (curIdx < str.length) {
    if (subarray.includes(str[curIdx])) {
      while (subarray.includes(str[curIdx])) {
        subarray.shift();
      }
    } else {
      subarray.push(str[curIdx++]);
      maxLen = Math.max(maxLen, subarray.length);
    }
  }

  return maxLen;
}


console.log(findLongestSubstring(''))
console.log(findLongestSubstring('rithmschool'))
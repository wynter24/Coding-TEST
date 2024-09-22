function solution(sticker) {
  const n = sticker.length;

  if (n === 1) return sticker[0];

  // 첫번째 스티커 뜯는 경우
  let prev1 = sticker[0];
  let curr1 = sticker[0];
  for (let i = 2; i < n - 1; i++) {
    const next = Math.max(curr1, prev1 + sticker[i]);
    prev1 = curr1;
    curr1 = next;
  }

  // 첫번째 뜯지 않는 경우
  let prev2 = 0;
  let curr2 = sticker[1];
  for (let i = 2; i < n; i++) {
    const next = Math.max(curr2, prev2 + sticker[i]);
    prev2 = curr2;
    curr2 = next;
  }

  return Math.max(curr1, curr2);
}
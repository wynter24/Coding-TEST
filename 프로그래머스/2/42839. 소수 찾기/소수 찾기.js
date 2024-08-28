function solution(numbers) {
  let answer = 0;
  let arr = numbers.split('').map(Number);
  let cases = new Set();

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const dfs = (current, used) => {
    if (current > 0) cases.add(parseInt(current)) // 숫자 조합 set에 추가
    if (current.length === arr.length) return; // 최대 길이 도달 시 종료

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue; // 이미 사용된 인덱스는 건너뜀 
      used[i] = true; // 현재 인덱스 사용 표시
      dfs(current + arr[i], used); // 다음 조합으로 진행
      used[i] = false; // 사용 표시 해제(백트랙킹)
    }
  }

  dfs('', Array(arr.length).fill(false));

  cases.forEach(num => { if (isPrime(+num)) answer++ });

  return answer;
}
function solution(n) {
    var answer = 0;
    
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }
    
    for(let prime of isPrime) {
        if(prime === true) answer++;
    }
    
    return answer;
}
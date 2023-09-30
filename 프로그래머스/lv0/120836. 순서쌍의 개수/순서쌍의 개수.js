function solution(n) {
    var answer = 0;
    for(let i=0; i<=n; i++) {
        if(Math.floor(n%i) === 0) answer++;
    }
    return answer;
}
function solution(n) {
    var answer = [];
    for(i=2;i<=n;i++) {
        while(n%i==0) {
            n = parseInt(n/i); 
            answer.push(i);
        } 
    }
    return [...new Set(answer)];
}
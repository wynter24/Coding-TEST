function solution(n) {
    var sum = 0;
    for(i=0;i<=n;i++) {
        if(i%2 === 0) {
            sum = sum + i
        }
    }
    return sum
}
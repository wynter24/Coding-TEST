function solution(number, limit, power) {
    var answer = 0;
    // 1-number까지 각 숫자의 약수 개수가 limit보다 크지 않다면 
    // 각각의 숫자 전부 더하기
    // 만약 limit < num 면, 해당 수 = 2로 계산하여 전부 더 함
    
    for(let i=1; i<=number; i++) {
        let count = 0;
        for(let j=1; j<=Math.sqrt(i); j++) {
            if(i % j === 0) {
                if(i / j === j) count++ // 제곱근 일 때 하나로 취급 
                else count += 2
            }
        }
        if(count>limit) {
            answer += power
        } else {
            answer += count
        }
    }
    return answer;
}
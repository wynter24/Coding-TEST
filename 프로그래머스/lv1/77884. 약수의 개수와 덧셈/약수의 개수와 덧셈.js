function solution(left, right) {
    var answer = 0;
    for(i=left;i<=right;i++) {
        let sqrt = Math.sqrt(i);
        if(sqrt%1 !== 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}
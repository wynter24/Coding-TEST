function solution(intStrs, k, s, l) {
    var answer = [];
    for(i=0;i<intStrs.length;i++) {
        let arr = intStrs[i].slice(s,s+l);
        if(arr>k) answer.push(parseInt(arr));
    }
    return answer;
}
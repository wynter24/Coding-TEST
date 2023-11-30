function solution(n) {
    var answer = [];
    for(i=2;i<=n;i++) {
        if(n%i==0) {
            answer.push(i);
            for(j=n;j>0;parseInt(j/=i)) {
                if(j%i==0) {
                    n = parseInt(j/i); 
                }
            }
        }  
    }
    return answer;
}
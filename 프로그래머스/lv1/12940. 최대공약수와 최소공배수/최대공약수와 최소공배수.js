function solution(n, m) {
    var answer = [];
    let greatest  = [];
    let least =[];
    for(i=1; i<=m; i++) {
        if(n%i==0 && m%i==0) {
            greatest.push(i);
            least.push(i * (n/i) * (m/i));
        }
    }
    answer.push(Math.max(...greatest )); // 최대공약수
    answer.push(Math.min(...least)); // 최소공배수
    return answer;
}
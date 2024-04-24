function solution(k, score) {
    let stack = [];
    let ans = [];
    
    for(let i = 0; i < score.length; i++){
        stack.push(score[i]);
        // 명예의 전당에 오를 수 있는 수는 k로 정해져 있다.  
        // 내림차순으로 정렬한 배열에서 그 해당 k 즉 인덱스로 따지면 
        // k-1이 그 배열에서 조건을 만족하는 가장 작은 수인 것이다.
        if(stack.length >= k){
            stack.sort((a, b) => b - a);
            ans.push(stack[k - 1]);
            continue;
        }
        
        ans.push(Math.min(...stack));
    }
    return ans;
}
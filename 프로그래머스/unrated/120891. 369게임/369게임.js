function solution(order) {
    var answer = 0;
    let arr = String(order).split('');
    arr.forEach(v => {
        if (v === '3' || v === '6' || v === '9') answer++;
    })
    
    return answer;
}
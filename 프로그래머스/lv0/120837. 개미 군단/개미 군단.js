function solution(hp) {
    var answer = 0;
    const head = Math.floor(hp/5)
    const mid = Math.floor((hp%5) / 3)
    if(hp%5 === 0) {
        answer += head
    } else {
        answer += head
        if((hp%5) % 3 === 0){
           answer += mid
        } else {
            answer += mid
            answer += (hp%5) % 3
        }
    }
    return answer;
}
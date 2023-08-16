function solution(money) {
    var answer = [];
    let max_cup = Math.floor(money / 5500);
    let change = money % 5500;
    answer.push(max_cup, change);
    
    return answer;
}
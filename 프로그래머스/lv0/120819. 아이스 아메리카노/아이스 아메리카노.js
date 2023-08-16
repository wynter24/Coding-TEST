function solution(money) {
    var answer = [];
    var max_cup = Math.floor(money / 5500);
    var change = money % 5500;
    answer.push(max_cup, change);
    
    return answer;
}
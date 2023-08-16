function solution(n, k) {
    var food = 12000 * n;
    var drink = 2000 * k;
    var service = Math.floor(n/10) * 2000;
    var answer = food+drink-service;
    return answer;
}
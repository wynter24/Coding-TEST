function solution(n) {
    var answer = 0;
    String(n).split('').map(num => answer+=Number(num));
    return answer;
}
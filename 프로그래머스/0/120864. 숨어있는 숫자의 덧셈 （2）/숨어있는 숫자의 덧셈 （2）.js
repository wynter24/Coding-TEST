function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('').map(n => parseInt(n)).join('').split(NaN)
    arr.forEach(n => answer += +n)
    return answer;
}
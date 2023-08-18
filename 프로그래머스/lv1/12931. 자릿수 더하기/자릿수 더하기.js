function solution(n)
{
    let arr = (n+'').split('').map(Number);
    let answer = arr.reduce((x,y) => x+y);
    return answer;
}
function solution(n) {
    return (n+'').split('').map(num => +num).reduce((a,c) => a+c);
}
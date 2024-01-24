function solution(array) {
    return array.join('').split('').filter(n => n === '7').length;
}
function solution(num, k) {
    return num.toString().split('').map(n => Number(n)).indexOf(k)+1 || -1
}
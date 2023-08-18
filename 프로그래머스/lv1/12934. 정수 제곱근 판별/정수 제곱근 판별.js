function solution(n) {
    let root = Math.sqrt(n);
    let plus = Number.isInteger(root) 
    if(plus === true) {
        return Math.pow(root+1,2);
    } else {
        return -1;
    }
}
function solution(x) {
    let arr = (x+'').split('').map(Number);
    let sum = 0;
    for(i=0;i<arr.length;i++) {
        sum += arr[i];
    }
    if(x%sum === 0) {
        return true;
    } else {
        return false;
    }
}
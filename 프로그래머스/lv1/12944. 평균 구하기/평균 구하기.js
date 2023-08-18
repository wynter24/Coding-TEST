function solution(arr) {
    // let sum = 0;
    // for(i=0;i<arr.length;i++) {
    //     sum += arr[i];
    // }
    // return sum/arr.length;
    return arr.reduce((x,y) => x+y) / arr.length
}
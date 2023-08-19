function solution(arr) {
    var answer = [];
    let n_min = Math.min(...arr);
    arr = arr.filter(n => n != n_min)
    return arr.length > 0 ? arr : arr = [-1];
    // if(arr.length > 0) {
    //     return arr;
    // } else {
    //     arr = [-1];
    // }
    // return arr;
}
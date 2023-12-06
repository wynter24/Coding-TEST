function solution(array, n) {
    let new_arr = array.map(x => Math.abs(n-x));
    let closednum = Math.min(...new_arr)
    return Math.min(...array.filter((x, idx) => new_arr[idx] === closednum));
}
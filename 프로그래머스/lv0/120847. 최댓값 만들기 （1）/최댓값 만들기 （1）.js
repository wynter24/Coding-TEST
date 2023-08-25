function solution(numbers) {
    let new_arr = numbers.sort((a,b) => a-b);
    let len = new_arr.length;
    let answer = new_arr[len-1] * new_arr[len-2]
    return answer;
}
function solution(n) {
    var numbers = []; // 숫자 배열 [1,2,3,4,5]
    let answer = [];
    let arr = String(n).split('');
    for(i=0;i<arr.length;i++){
        numbers.push(parseInt(arr[i]))
    }
    for(i=numbers.length-1;i>=0;i--) {
        answer.push(numbers[i]);
    }
    return answer;
}
function solution(s) {
    var answer = '';
    let arr = (s+'').split('');
    if(arr.length%2 == 1){
       answer = arr[Math.floor(arr.length/2)];
    } else {
        answer =  arr[Math.floor(arr.length/2)-1] + arr[Math.floor(arr.length/2)];
    }
    return answer;
}
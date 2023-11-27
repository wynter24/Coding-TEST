function solution(my_string) {
    var answer = 0;
    const arr = my_string.match(/\d/g);
    for(i=0;i<arr.length;i++) {
        answer += Number(arr[i]);
    }
    return answer
}
function solution(arr, n) {
    var answer = [];
    if(arr.length%2===0) {
        for(i=0;i<arr.length;i++) {
            if(i%2==0){
                answer.push(arr[i]);
            } else {
                answer.push(arr[i]+n);
            }
        }
    } else {
        for(i=0;i<arr.length;i++) {
            if(i%2==0){
                answer.push(arr[i]+n);
            } else {
                answer.push(arr[i]);
            }
        }
    }
    return answer;
}
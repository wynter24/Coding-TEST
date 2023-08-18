function solution(n) {
    let arr = (n+'').split('').map(Number);
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr.length;j++) {
            if(arr[i]>arr[j]) {
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }
    return parseInt(arr.join(''));
}
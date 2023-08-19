function solution(numbers) {
    let sum = 0;
    for(i=0;i<numbers.length;i++) {
        sum += numbers[i];
    }
    // for(i=0;i<10;i++) {
    //     if(numbers[i] !== i) {
    //         sum += i;
    //         // return numbers[i];
    //     }
    //     // num = numbers.filter(n => n !== i);
    // }
    return 45-sum;
}
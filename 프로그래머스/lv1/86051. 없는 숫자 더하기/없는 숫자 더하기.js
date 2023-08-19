function solution(numbers) {
    // let sum = 0;
    // for(i=0;i<numbers.length;i++) {
    //     sum += numbers[i];
    // }
    // return 45-sum;
    
    let sum = 0;
      for(i=0;i<10;i++) {
        if(!numbers.includes(i)) {
          sum += i;
        }
      }
     return sum;
}
function solution(num_list) {
//     012345
//     123456
    let sum1 = 0;
    let sum2 = 0;
    for(i=0;i<num_list.length;i++) {
        if(i%2 === 0) {
            sum1 += num_list[i];
        } else {
            sum2 += num_list[i];
        }
    }
    return sum1>sum2 ? sum1 : sum2;
}
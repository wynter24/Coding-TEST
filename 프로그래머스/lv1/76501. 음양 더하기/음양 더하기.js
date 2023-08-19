function solution(absolutes, signs) {
    let sum = 0;
    for(i=0;i<signs.length;i++) {
        if(signs[i] == true) {
            sum += absolutes[i];
        } else {
            sum -= absolutes[i];
        }
    }
    return sum;
}
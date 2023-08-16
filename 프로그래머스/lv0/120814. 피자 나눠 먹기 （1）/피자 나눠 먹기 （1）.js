function solution(n) {
    for(i=0;i<100;i++) {
        if(n <= 7 * i){
            return i
        }
    }
}
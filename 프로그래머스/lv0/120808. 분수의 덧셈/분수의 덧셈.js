function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let down = denom1*denom2;
    let up = numer1*denom2 + numer2*denom1;
    let a = down>up ? down:up;
    let b;
    for(i=1;i<=a;i++) {
        if(down%i==0 && up%i==0) {
            b = i;
        }
    }
    answer.push(up/b,down/b);     
    return answer;
}
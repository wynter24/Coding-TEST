function solution(balls, share) {
    let num1 = 1;
    let num2 = 1;
    for(let i=balls;i>share;i--){
        num1 *= i;
    }
    for(let i=1;i<=balls-share;i++) {
        num2 *= i;
    }
    return Math.floor(num1/num2);
}
function solution(a, b, n) {
    let totalCoke = 0;
    let emptyBottle = n;
    while(emptyBottle >= a) {
        let exchangedCoke = Math.floor(emptyBottle / a) * b;
        totalCoke += exchangedCoke;
        
        emptyBottle %= a;
        emptyBottle += exchangedCoke;
    }
    return totalCoke;
}
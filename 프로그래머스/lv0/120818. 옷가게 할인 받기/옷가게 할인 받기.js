function solution(price) {
    if(price >= 500000) {
        price *= 0.8;
    } else if(price >= 300000) {
        price *= 0.9;
    } else if(price >= 100000) {
        price *= 0.95;
    }
    return Math.floor(price);
    // return parseInt(price);
}
// function solution(price) {
//     if (price >= 100000 && price < 300000) {
//         return Math.floor(price * .95)
//     } else if (price >= 300000 && price < 500000) {
//         return Math.floor(price * .9)
//     } else if (price >= 500000) {
//         return Math.floor(price * .8)
//     } else {
//         return price
//     }
// }
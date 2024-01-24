function solution(sides) {
    // max < min + x -> max-min < x
    // x<=max
    // max-min < x <= max -> max - (max-min) = min

    // max < x < min+max -> min+max - max -1 = min-1
    
    return sides.reduce((a,c) => Math.min(a,c)*2 -1);
    // return Math.min(sides[0],sides[1])*2 -1;
    // return Math.min(...sides)*2 -1;
}
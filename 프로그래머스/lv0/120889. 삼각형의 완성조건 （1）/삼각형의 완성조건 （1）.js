function solution(sides) {
    let arr = sides.sort((a, b) =>(b-a));
    
    if(arr[0]<arr[1]+arr[2]) {
        return 1
    } else {
        return 2
    }
}
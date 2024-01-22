function solution(numbers) {
    let l = numbers.length;
    
    let newarr = numbers.sort((a,b) => a-b);
    
    return Math.max(
        newarr[0] * newarr[1],
        newarr[l-1] * newarr[l-2]
    )
}
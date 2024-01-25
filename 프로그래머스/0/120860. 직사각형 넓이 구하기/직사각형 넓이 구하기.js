function solution(dots) {
    var answer = 0;
    let xdots = dots.map(d => d[0]);
    let ydots = dots.map(d => d[1]);
    const xl = Math.max(...xdots)-Math.min(...xdots);
    const yl = Math.max(...ydots)-Math.min(...ydots);
    
    return  xl*yl ;
}
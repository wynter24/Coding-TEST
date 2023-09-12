function solution(food) {
    let result = []
    var answer = '';
    for(let i=1;i<food.length;i++) {
        const num = Math.floor(food[i] / 2)
        for(let j=1;j<=num;j++) {
            result.push(i);
            answer+=i;
        }
    } 
    const reverse = result.reverse();
    return answer+'0'+reverse.join('');
}
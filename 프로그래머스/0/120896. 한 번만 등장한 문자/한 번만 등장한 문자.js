function solution(s) {
    var answer = [];
    
    let newarr = s.split('');
    newarr.forEach(n => {if(s.indexOf(n) === s.lastIndexOf(n)) answer.push(n)});
    
    return answer.sort().join('');
}
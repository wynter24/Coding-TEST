function solution(my_string, n) {
    var answer = '';
    // for(let i=0;i<my_string.length;i++) {
    //     answer += my_string[i].repeat(n);
    // }
    // return answer;
    
    for(let s of my_string) answer+= s.repeat(n);
    return answer;
}
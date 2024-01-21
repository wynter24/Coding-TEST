function solution(my_string) {
    let newarr = my_string.split(' ');
    let answer = Number(newarr[0]);
    for(i=1;i<newarr.length;i++) {
        if(newarr[i] === '+') {
            answer+=Number(newarr[i+1])
        } else if(newarr[i] === '-') {
            answer-=Number(newarr[i+1])
        }
    }
    return answer;
}
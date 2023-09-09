function solution(age) {
    var answer = '';
    var age = (age+'');
    for(let i=0;i<age.length;i++) {
        answer += String.fromCharCode(Number(age[i])+97);
    }
    return answer;
}
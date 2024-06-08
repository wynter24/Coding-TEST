function solution(s) {
    var answer = '';
    s = s.split(' ').sort((a,b) => a-b);
    answer += `${s[0]} `;
    answer += s[s.length-1];
    return answer;
}
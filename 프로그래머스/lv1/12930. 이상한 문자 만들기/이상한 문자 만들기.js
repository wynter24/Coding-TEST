function solution(s) {
    var answer = [];
    s = s.split(' ');
    for(i=0;i<s.length;i++) {
        for(j=0;j<s[i].length;j++) {
            if(j%2==0) {
                answer.push(s[i][j].toUpperCase());
            } else {
                answer.push(s[i][j].toLowerCase());
            }
        } 
        if(i<s.length-1) {
            answer.push(' ');
        }
    }
    return answer.join('');
}
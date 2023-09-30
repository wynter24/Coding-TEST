function solution(rsp) {
    var answer = '';
    for(let i=0;i<rsp.length;i++) {
        rsp[i] === '2' ? answer+='0' : rsp[i] === '0' ? answer+='5' : answer+='2'
    }
    return answer;
}
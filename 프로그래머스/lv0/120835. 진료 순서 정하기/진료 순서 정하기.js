function solution(emergency) {
    var answer = [];
    // 깊은 복사
    // let newarr = JSON.parse(JSON.stringify(emergency))
    let newarr = [...emergency].sort((a, b) => b - a);
    newarr = newarr.sort((a,b)=>b-a)
    emergency.map((v,i) => {
        if(newarr.includes(v)) {
            answer.push(newarr.indexOf(v)+1);
        }
    })
    return answer;
}
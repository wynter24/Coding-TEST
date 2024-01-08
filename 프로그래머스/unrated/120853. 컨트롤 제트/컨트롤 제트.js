function solution(s) {
    var answer = 0;
    const new_arr = s.split(' ');
    new_arr.forEach((v,i) => {
        if(v === 'Z') answer -= Number(new_arr[i-1]);
        else answer += Number(v);
    })
    console.log(new_arr)
    return answer;
}
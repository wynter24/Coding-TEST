function solution(quiz) {
    var answer = [];
    let calculate = 0;
    quiz.map(q => {
        let sign = q.split(' ');
        let newarr = q.split(' ').map(item => Number(item));
        
        sign[1] === '-' ? calculate = (newarr[0]) - newarr[2] : calculate = newarr[0] + newarr[2]
        calculate === newarr[4] ? answer.push('O') : answer.push('X')
    })
    return answer;
}
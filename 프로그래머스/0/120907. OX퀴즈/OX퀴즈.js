function solution(quiz) {
    return quiz.map(q => {
        const [x, op, y, _, z] = q.split(' ');
        
        if(op === '+') {
            return +x + +y === +z ? 'O' : 'X'
        } else {
            return +x - +y === +z ? 'O' : 'X'
        }
    })
}
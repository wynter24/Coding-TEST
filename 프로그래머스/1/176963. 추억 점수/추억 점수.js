function solution(name, yearning, photo) {
    var answer = [];
    photo.forEach(el => {
        let sum = 0;
        el.forEach(person => {
            if(name.includes(person)) {
                let nameIdx = name.indexOf(person);
                sum += yearning[nameIdx];
            }
        })
        answer.push(sum);
    })
    return answer;
}
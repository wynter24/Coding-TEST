function solution(my_string) {
    var answer = '';
    let capital = my_string.toUpperCase();
    let lowercase = my_string.toLowerCase();
    for(let i=0; i<my_string.length;i++){
        if(my_string[i] !== capital[i]) {
            answer += capital[i]
        } else {
            answer += lowercase[i]
        }
    }
    // return answer;
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('');
}
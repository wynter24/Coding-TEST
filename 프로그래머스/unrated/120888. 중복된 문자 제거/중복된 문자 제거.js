function solution(my_string) {
    const set = new Set(my_string);
    var answer = [...set];
    return answer.join('');
}
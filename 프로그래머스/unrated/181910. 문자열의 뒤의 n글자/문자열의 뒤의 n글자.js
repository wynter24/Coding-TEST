function solution(my_string, n) {
    var answer = my_string.slice(my_string.length-n);
    return answer;
}

solution("ProgrammerS123", 11);
solution("He110W0r1d", 5);
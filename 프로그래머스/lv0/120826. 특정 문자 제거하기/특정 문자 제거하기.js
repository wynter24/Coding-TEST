function solution(my_string, letter) {
    // return my_string.replaceAll(letter,'');
    return my_string.split(letter).join('');
}
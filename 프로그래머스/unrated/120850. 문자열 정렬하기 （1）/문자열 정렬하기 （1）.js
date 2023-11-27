function solution(my_string) {
    const str = /[^0-9]/g;
    const str_num = my_string.replace(str,'').split('');
    const answer = str_num.sort((a,b) => a-b)
    
    return answer.map((arg) => Number(arg))
}
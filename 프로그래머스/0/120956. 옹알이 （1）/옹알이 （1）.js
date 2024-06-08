function solution(babbling) {
    const li = ["aya", "ye", "woo", "ma"];
    let answer = babbling.reduce((a,c) => {
       for(const el of li) c = c.replaceAll(el,' ');
       return c.replaceAll(' ','').length ? a : a+1;
    },0)
    return answer;
}